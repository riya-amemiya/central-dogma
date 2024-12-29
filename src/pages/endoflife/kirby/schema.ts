import { z } from "@hono/zod-openapi";

export const GetKirbyResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string().optional(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    supportedPhpVersions: z.string().optional(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    link: z.any().optional(),
  }),
);
