import { z } from "@hono/zod-openapi";

export const GetAzureDevopsServerResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string(),
    lts: z.boolean(),
    support: z.string(),
  }),
);
