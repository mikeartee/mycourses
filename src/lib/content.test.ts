import { describe, it, expect } from 'vitest';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadCourses, resolveCourse, validateContent } from './content';

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
