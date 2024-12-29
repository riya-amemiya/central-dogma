import { z } from "@hono/zod-openapi";

export const GetMssqlserverResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latestGdr: z.string().optional(),
    latestGdrLink: z.string().optional(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string(),
    lts: z.boolean(),
    support: z.string(),
    extendedSupport: z.union([z.string(), z.boolean()]),
  }),
);
