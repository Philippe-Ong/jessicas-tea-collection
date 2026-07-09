/** Returns the base URL path for the site (e.g. '/jessicas-tea-collection/') */
export const BASE = import.meta.env.BASE_URL;

/** Builds a URL with the base path prefix. Pass path without leading slash. */
export function url(path: string): string {
  // Remove leading slash from path, then prepend BASE
  const cleanPath = path.replace(/^\/+/, '');
  return `${BASE}${cleanPath}`;
}
