import { z } from "@hono/zod-openapi";

export const GetJenkinsResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    outOfOrder: z.boolean().optional(),
    releaseLabel: z.string().optional(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.union([z.string(), z.boolean()]),
  }),
);
