import { z } from "@hono/zod-openapi";

export const GetCitrixVadResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string().optional(),
    lts: z.boolean(),
    support: z.string(),
    extendedSupport: z.union([z.string(), z.boolean()]),
    releaseLabel: z.string().optional(),
  }),
);
