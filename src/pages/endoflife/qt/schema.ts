import { z } from "@hono/zod-openapi";

export const GetQtResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string().optional(),
    lts: z.boolean(),
    extendedSupport: z.union([z.string(), z.boolean()]),
    link: z.string().optional(),
  }),
);
