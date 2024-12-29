import { z } from "@hono/zod-openapi";

export const GetAmazonRdsMysqlResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    extendedSupport: z.union([z.string(), z.boolean()]),
  }),
);
