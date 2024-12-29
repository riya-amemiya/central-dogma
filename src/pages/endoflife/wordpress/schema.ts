import { z } from "@hono/zod-openapi";

export const GetWordpressResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    supportedPHPVersions: z.string().optional(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
  }),
);
