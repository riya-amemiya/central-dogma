import { z } from "@hono/zod-openapi";

export const GetNexusResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
    releaseLabel: z.string().optional(),
    link: z.string().optional(),
  }),
);
