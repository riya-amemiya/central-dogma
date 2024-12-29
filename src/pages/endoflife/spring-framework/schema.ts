import { z } from "@hono/zod-openapi";

export const GetSpringFrameworkResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    supportedJavaVersions: z.string(),
    supportedJakartaEEVersions: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    extendedSupport: z.union([z.string(), z.boolean()]),
    link: z.string().optional(),
  }),
);
