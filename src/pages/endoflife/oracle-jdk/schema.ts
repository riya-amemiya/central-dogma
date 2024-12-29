import { z } from "@hono/zod-openapi";

export const GetOracleJdkResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    link: z.string().optional(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    extendedSupport: z.union([z.string(), z.boolean()]),
  }),
);
