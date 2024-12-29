import { z } from "@hono/zod-openapi";

export const GetIbmIResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string().optional(),
    lts: z.boolean(),
    extendedSupport: z.union([z.string(), z.boolean()]),
    outOfOrder: z.boolean().optional(),
  }),
);