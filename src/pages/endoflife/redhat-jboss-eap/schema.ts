import { z } from "@hono/zod-openapi";

export const GetRedhatJbossEapResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.string(),
    extendedSupport: z.string(),
    link: z.string().optional(),
  }),
);
