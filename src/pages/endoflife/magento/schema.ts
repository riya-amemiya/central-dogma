import { z } from "@hono/zod-openapi";

export const GetMagentoResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    supportedPhpVersions: z.union([z.string(), z.number()]).optional(),
    latest: z.string(),
    latestReleaseDate: z.string().optional(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
    extendedSupport: z.union([z.string(), z.boolean()]),
    link: z.string().optional(),
  }),
);
