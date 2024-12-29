import { z } from "@hono/zod-openapi";

export const GetQuarkusFrameworkResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    extendedSupport: z.union([z.string(), z.boolean()]),
    link: z.string().optional(),
  }),
);
