import { z } from "@hono/zod-openapi";

export const GetAngularjsResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.string(),
    eoesProvider: z.string().optional(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    extendedSupport: z.boolean(),
  }),
);
