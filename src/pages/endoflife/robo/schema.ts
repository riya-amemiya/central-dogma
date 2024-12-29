import { z } from "@hono/zod-openapi";

export const GetRoboResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    supportedPHPVersions: z.string(),
    eol: z.boolean(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.boolean(),
  }),
);
