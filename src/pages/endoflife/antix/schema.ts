import { z } from "@hono/zod-openapi";

export const GetAntixResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string(),
    releaseDate: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    eol: z.string(),
    link: z.string(),
    lts: z.boolean(),
    support: z.string(),
  }),
);
