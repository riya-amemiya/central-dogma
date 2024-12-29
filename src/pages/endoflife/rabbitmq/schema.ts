import { z } from "@hono/zod-openapi";

export const GetRabbitmqResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    extendedSupport: z.string(),
    link: z.string().optional(),
  }),
);
