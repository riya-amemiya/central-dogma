import { z } from "@hono/zod-openapi";

export const GetSlackwareResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string().optional(),
    releaseLabel: z.string().optional(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string().optional(),
    latestReleaseDate: z.string().optional(),
    lts: z.boolean(),
    link: z.string().optional(),
  }),
);
