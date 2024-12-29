import { z } from "@hono/zod-openapi";

export const GetAmazonNeptuneResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    upgradeVersion: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
  }),
);
