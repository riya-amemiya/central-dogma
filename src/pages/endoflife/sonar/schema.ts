import { z } from "@hono/zod-openapi";

export const GetSonarResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string(),
    lts: z.union([z.string(), z.boolean()]),
    support: z.union([z.string(), z.boolean()]),
  }),
);
