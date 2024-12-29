import { z } from "@hono/zod-openapi";

export const GetSpringBootResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    supportedJavaVersions: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    extendedSupport: z.string(),
    link: z.string().optional(),
  }),
);
