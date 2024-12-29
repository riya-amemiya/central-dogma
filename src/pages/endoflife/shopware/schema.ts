import { z } from "@hono/zod-openapi";

export const GetShopwareResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    supportedPhpVersions: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
    extendedSupport: z.boolean(),
    link: z.string().optional(),
  }),
);
