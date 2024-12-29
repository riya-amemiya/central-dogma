import { z } from "@hono/zod-openapi";

export const GetKindleResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string().optional(),
    link: z.string().optional(),
    lts: z.boolean(),
  }),
);
