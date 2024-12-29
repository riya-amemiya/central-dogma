import { z } from "@hono/zod-openapi";

export const GetVueResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    support: z.union([z.string(), z.boolean()]),
    extendedSupport: z.boolean(),
    link: z.string().optional(),
  }),
);
