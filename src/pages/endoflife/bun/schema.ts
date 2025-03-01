import { z } from "@hono/zod-openapi";

export const GetBunResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.boolean(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
  }),
);
