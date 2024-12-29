import { z } from "@hono/zod-openapi";

export const GetDevuanResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string(),
    releaseDate: z.string(),
    lts: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string(),
  }),
);
