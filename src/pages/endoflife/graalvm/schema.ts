import { z } from "@hono/zod-openapi";

export const GetGraalvmResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string().optional(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    extendedSupport: z.boolean(),
  }),
);
