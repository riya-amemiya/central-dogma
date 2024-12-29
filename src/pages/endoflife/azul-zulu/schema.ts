import { z } from "@hono/zod-openapi";

export const GetAzulZuluResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestJdkVersion: z.string(),
    latestReleaseDate: z.string(),
    link: z.string().optional(),
    lts: z.boolean(),
    extendedSupport: z.string(),
    releaseLabel: z.string().optional(),
  }),
);
