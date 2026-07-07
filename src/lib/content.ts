import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

export interface QuizAnswer {
  id: string;
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  id: string;
  questionNumber?: number;
  type: 'MULTIPLE_CHOICE' | 'MULTIPLE_RESPONSE';
  question: string;
  answers: QuizAnswer[];
  feedback?: string;
}

export interface Quiz {
  title: string;
  type?: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'content' | 'quiz';
  markdownPath?: string;
  quizPath?: string;
  /** Optional "What you'll learn" bullet points, shown in a callout at the top of the lesson. */
  objectives?: string[];
}

export interface Heading {
  depth: number;
  text: string;
  slug: string;
}

export interface ModuleManifest {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  estimatedDuration?: string;
  welcomePath?: string;
  modules: string[];
}

export interface ResolvedCourse {
  course: Course;
  modules: ModuleManifest[];
}

function root(rootDir?: string): string {
  return rootDir ?? process.cwd();
}

function readJson<T>(p: string): T {
  return JSON.parse(fs.readFileSync(p, 'utf-8')) as T;
}

function dirNames(p: string): string[] {
  if (!fs.existsSync(p)) return [];
  return fs
    .readdirSync(p, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export function loadModules(rootDir?: string): ModuleManifest[] {
  const base = path.join(root(rootDir), 'modules');
  return dirNames(base)
    .map((d) => {
      const mp = path.join(base, d, 'manifest.json');
      return fs.existsSync(mp) ? readJson<ModuleManifest>(mp) : null;
    })
    .filter((m): m is ModuleManifest => m !== null);
}

export function loadCourses(rootDir?: string): Course[] {
  const base = path.join(root(rootDir), 'courses');
  return dirNames(base)
    .map((d) => {
      const cp = path.join(base, d, 'course.json');
      return fs.existsSync(cp) ? readJson<Course>(cp) : null;
    })
    .filter((c): c is Course => c !== null);
}

export function getModuleMap(rootDir?: string): Map<string, ModuleManifest> {
  const map = new Map<string, ModuleManifest>();
  for (const mod of loadModules(rootDir)) map.set(mod.id, mod);
  return map;
}

export function resolveCourse(slug: string, rootDir?: string): ResolvedCourse {
  const course = loadCourses(rootDir).find((c) => c.id === slug);
  if (!course) throw new Error(`Course not found: ${slug}`);
  const map = getModuleMap(rootDir);
  const modules = course.modules.map((id) => {
    const mod = map.get(id);
    if (!mod) throw new Error(`Course ${slug} references missing module: ${id}`);
    return mod;
  });
  return { course, modules };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Estimated reading time in minutes (~200 words/min, minimum 1). */
export function readingTime(md: string): number {
  const words = md.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Render Markdown to HTML and collect the h2/h3 headings for an "on this page"
 * table of contents. Injects a unique `id` on each heading for anchor links.
 */
export function renderMarkdownWithHeadings(md: string): { html: string; headings: Heading[] } {
  let html = marked.parse(md, { async: false }) as string;
  const headings: Heading[] = [];
  const seen = new Set<string>();
  html = html.replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (_full, tag: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    const base = slugify(text) || 'section';
    let slug = base;
    let n = 2;
    while (seen.has(slug)) slug = `${base}-${n++}`;
    seen.add(slug);
    headings.push({ depth: tag === 'h2' ? 2 : 3, text, slug });
    return `<${tag} id="${slug}">${inner}</${tag}>`;
  });
  return { html, headings };
}

export function renderMarkdown(md: string): string {
  return renderMarkdownWithHeadings(md).html;
}

export interface LessonContent {
  html: string;
  headings: Heading[];
  minutes: number;
}

export function lessonContent(moduleId: string, lesson: Lesson, rootDir?: string): LessonContent {
  if (lesson.type !== 'content' || !lesson.markdownPath) {
    return { html: '', headings: [], minutes: 0 };
  }
  const p = path.join(root(rootDir), 'modules', moduleId, lesson.markdownPath);
  const md = fs.readFileSync(p, 'utf-8');
  const { html, headings } = renderMarkdownWithHeadings(md);
  return { html, headings, minutes: readingTime(md) };
}

export function lessonHtml(moduleId: string, lesson: Lesson, rootDir?: string): string {
  return lessonContent(moduleId, lesson, rootDir).html;
}

export function loadQuiz(moduleId: string, lesson: Lesson, rootDir?: string): Quiz {
  const p = path.join(root(rootDir), 'modules', moduleId, lesson.quizPath ?? 'quiz.json');
  return readJson<Quiz>(p);
}

export function courseWelcomeContent(course: Course, rootDir?: string): { html: string; headings: Heading[] } {
  if (!course.welcomePath) return { html: '', headings: [] };
  const p = path.join(root(rootDir), 'courses', course.id, course.welcomePath);
  if (!fs.existsSync(p)) return { html: '', headings: [] };
  return renderMarkdownWithHeadings(fs.readFileSync(p, 'utf-8'));
}

export function courseWelcomeHtml(course: Course, rootDir?: string): string {
  return courseWelcomeContent(course, rootDir).html;
}

/** Validate all content. Returns a list of human-readable errors (empty = valid). */
export function validateContent(rootDir?: string): string[] {
  const errors: string[] = [];
  const modMap = getModuleMap(rootDir);

  for (const mod of loadModules(rootDir)) {
    if (!mod.id) errors.push('a module is missing an id');
    for (const l of mod.lessons ?? []) {
      if (l.type === 'content') {
        if (!l.markdownPath) {
          errors.push(`${mod.id}/${l.id}: content lesson missing markdownPath`);
          continue;
        }
        const p = path.join(root(rootDir), 'modules', mod.id, l.markdownPath);
        if (!fs.existsSync(p)) errors.push(`${mod.id}/${l.id}: markdown file missing (${l.markdownPath})`);
      } else if (l.type === 'quiz') {
        if (!l.quizPath) {
          errors.push(`${mod.id}/${l.id}: quiz lesson missing quizPath`);
          continue;
        }
        const p = path.join(root(rootDir), 'modules', mod.id, l.quizPath);
        if (!fs.existsSync(p)) {
          errors.push(`${mod.id}/${l.id}: quiz file missing (${l.quizPath})`);
          continue;
        }
        try {
          const q = readJson<Quiz>(p);
          for (const question of q.questions ?? []) {
            if (!(question.answers ?? []).some((a) => a.correct)) {
              errors.push(`${mod.id}/${l.id}/${question.id}: no correct answer`);
            }
          }
        } catch {
          errors.push(`${mod.id}/${l.id}: quiz JSON parse error (${l.quizPath})`);
        }
      }
    }
  }

  for (const c of loadCourses(rootDir)) {
    if (!c.id) errors.push('a course is missing an id');
    for (const mid of c.modules ?? []) {
      if (!modMap.has(mid)) errors.push(`course ${c.id}: references missing module ${mid}`);
    }
    if (c.welcomePath) {
      const p = path.join(root(rootDir), 'courses', c.id, c.welcomePath);
      if (!fs.existsSync(p)) errors.push(`course ${c.id}: welcome file missing (${c.welcomePath})`);
    }
  }

  return errors;
}

export function assertValidContent(rootDir?: string): void {
  const errors = validateContent(rootDir);
  if (errors.length > 0) {
    throw new Error('Content validation failed:\n' + errors.map((e) => '  - ' + e).join('\n'));
  }
}
