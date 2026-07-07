import { describe, it, expect } from 'vitest';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  loadCourses,
  resolveCourse,
  validateContent,
  readingTime,
  slugify,
  renderMarkdownWithHeadings,
} from './content';

const here = path.dirname(fileURLToPath(import.meta.url));
const valid = path.join(here, '../../test/fixtures/valid');
const broken = path.join(here, '../../test/fixtures/broken');

describe('content loader', () => {
  it('loads courses from a content root', () => {
    const courses = loadCourses(valid);
    expect(courses).toHaveLength(1);
    expect(courses[0].id).toBe('demo');
  });

  it('resolves a course to its ordered modules', () => {
    const { course, modules } = resolveCourse('demo', valid);
    expect(course.title).toBe('Demo');
    expect(modules.map((m) => m.id)).toEqual(['m-basics']);
    expect(modules[0].lessons).toHaveLength(2);
  });

  it('reports no errors for valid content', () => {
    expect(validateContent(valid)).toEqual([]);
  });

  it('throws when resolving a course with a missing module', () => {
    expect(() => resolveCourse('x', broken)).toThrow(/missing module/);
  });
});

describe('content validation', () => {
  const errors = validateContent(broken);

  it('flags a course referencing a missing module', () => {
    expect(errors.some((e) => e.includes('missing module ghost'))).toBe(true);
  });

  it('flags a content lesson whose markdown file is missing', () => {
    expect(errors.some((e) => e.includes('gone.md'))).toBe(true);
  });

  it('flags a quiz question with no correct answer', () => {
    expect(errors.some((e) => e.includes('no correct answer'))).toBe(true);
  });
});

describe('slugify', () => {
  it('lowercases and hyphenates', () => {
    expect(slugify('What Is AI?')).toBe('what-is-ai');
  });
  it('trims leading/trailing separators', () => {
    expect(slugify('  Regular Software vs AI  ')).toBe('regular-software-vs-ai');
  });
});

describe('readingTime', () => {
  it('returns at least 1 minute for short text', () => {
    expect(readingTime('a few words here')).toBe(1);
  });
  it('scales with word count (~200 wpm)', () => {
    const md = Array.from({ length: 600 }, () => 'word').join(' ');
    expect(readingTime(md)).toBe(3);
  });
});

describe('renderMarkdownWithHeadings', () => {
  const md = '# Title\n\n## First Section\n\ntext\n\n## Second Section\n\n### Sub\n\nmore';
  const { html, headings } = renderMarkdownWithHeadings(md);

  it('collects h2 and h3 headings (not h1)', () => {
    expect(headings.map((h) => h.text)).toEqual(['First Section', 'Second Section', 'Sub']);
    expect(headings.map((h) => h.depth)).toEqual([2, 2, 3]);
  });

  it('injects matching id anchors into the html', () => {
    expect(html).toContain('<h2 id="first-section">First Section</h2>');
    expect(html).toContain('<h3 id="sub">Sub</h3>');
  });

  it('de-duplicates repeated heading slugs', () => {
    const dup = renderMarkdownWithHeadings('## Notes\n\na\n\n## Notes\n\nb');
    expect(dup.headings.map((h) => h.slug)).toEqual(['notes', 'notes-2']);
  });
});
