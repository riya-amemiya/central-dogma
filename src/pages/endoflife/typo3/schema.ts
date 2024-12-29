import { z } from "@hono/zod-openapi";

export const GetTypo3Response200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    lts: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    support: z.string(),
    extendedSupport: z.string(),
  }),
);
