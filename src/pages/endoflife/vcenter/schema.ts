import { z } from "@hono/zod-openapi";

export const GetVcenterResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    technicalGuidance: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string().optional(),
    lts: z.boolean(),
  }),
);
