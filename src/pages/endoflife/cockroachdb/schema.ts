import { z } from "@hono/zod-openapi";

export const GetCockroachdbResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.union([z.string(), z.boolean()]),
    support: z.string(),
  }),
);
