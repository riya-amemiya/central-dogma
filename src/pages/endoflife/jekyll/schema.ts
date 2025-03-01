import { z } from "@hono/zod-openapi";

export const GetJekyllResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    minRubyVersion: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.boolean(),
  }),
);
