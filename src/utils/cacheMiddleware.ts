import { createMiddleware } from "hono/factory";

import type { MiddlewareHandler } from "hono";

type CacheDirective =
  | "public"
  | "private"
  | "no-cache"
  | "no-store"
  | "must-revalidate"
  | "proxy-revalidate"
  | "immutable";

interface CacheOptions {
  maxAge?: number;
  sMaxAge?: number;
  directives?: CacheDirective[];
  staleWhileRevalidate?: number;
  staleIfError?: number;
}

export const cacheMiddleware = (
  options: CacheOptions = {},
): MiddlewareHandler => {
  return createMiddleware(async (c, next) => {
    await next();

    const {
      maxAge = 3600,
      sMaxAge,
      directives = [],
      staleWhileRevalidate,
      staleIfError,
    } = options;

    const parts: string[] = [
      ...directives,
      ...(maxAge !== undefined && maxAge >= 0
        ? [`max-age=${Math.floor(maxAge)}`]
        : []),
      ...(sMaxAge !== undefined && sMaxAge >= 0
        ? [`s-maxage=${Math.floor(sMaxAge)}`]
        : []),
      ...(staleWhileRevalidate !== undefined && staleWhileRevalidate >= 0
        ? [`stale-while-revalidate=${Math.floor(staleWhileRevalidate)}`]
        : []),
      ...(staleIfError !== undefined && staleIfError >= 0
        ? [`stale-if-error=${Math.floor(staleIfError)}`]
        : []),
    ];

    if (parts.length > 0) {
      c.header("Cache-Control", parts.join(", "));
    }
  });
};
