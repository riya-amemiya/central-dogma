import { z } from "@hono/zod-openapi";

export const GetDebianResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    link: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    extendedSupport: z.string(),
  }),
);
