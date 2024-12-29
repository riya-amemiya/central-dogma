import { z } from "@hono/zod-openapi";

export const GetUbuntuResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    support: z.string(),
    extendedSupport: z.union([z.string(), z.boolean()]),
  }),
);
