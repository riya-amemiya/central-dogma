import { z } from "@hono/zod-openapi";

export const GetPhpbbResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
    link: z.string().optional(),
  }),
);
