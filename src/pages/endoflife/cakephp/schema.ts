import { z } from "@hono/zod-openapi";

export const GetCakephpResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string().optional(),
    releaseDate: z.string(),
    supportedPhpVersions: z.string().optional(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
    link: z.string().optional(),
  }),
);
