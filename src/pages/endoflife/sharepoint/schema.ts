import { z } from "@hono/zod-openapi";

export const GetSharepointResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string().optional(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
  }),
);
