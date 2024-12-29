import { z } from "@hono/zod-openapi";

export const GetElectronResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    chromeVersion: z.string(),
    nodeVersion: z.string(),
    lts: z.boolean(),
  }),
);
