import { z } from "@hono/zod-openapi";

export const GetCentreonResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    lts: z.union([z.string(), z.boolean()]),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string().optional(),
    support: z.string(),
  }),
);
