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

    const parts: string[] = [...directives];

    if (maxAge !== undefined && maxAge >= 0) {
      parts.push(`max-age=${Math.floor(maxAge)}`);
    }

    if (sMaxAge !== undefined && sMaxAge >= 0) {
      parts.push(`s-maxage=${Math.floor(sMaxAge)}`);
    }

    if (staleWhileRevalidate !== undefined && staleWhileRevalidate >= 0) {
      parts.push(`stale-while-revalidate=${Math.floor(staleWhileRevalidate)}`);
    }

    if (staleIfError !== undefined && staleIfError >= 0) {
      parts.push(`stale-if-error=${Math.floor(staleIfError)}`);
    }

    if (parts.length > 0) {
      c.header("Cache-Control", parts.join(", "));
    }
  });
};
