const base = import.meta.env.BASE_URL;

/** Join a site-absolute path onto the configured base path. */
export function href(p: string): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const s = p.startsWith('/') ? p : '/' + p;
  return b + s;
}
