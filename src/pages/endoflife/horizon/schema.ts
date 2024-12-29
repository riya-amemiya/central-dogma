import { z } from "@hono/zod-openapi";

export const GetHorizonResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    technicalGuidance: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string().optional(),
    lts: z.boolean(),
    releaseLabel: z.string().optional(),
  }),
);
