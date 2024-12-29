import { z } from "@hono/zod-openapi";

export const GetLookerResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    lts: z.union([z.string(), z.boolean()]),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string().optional(),
    latestReleaseDate: z.string().optional(),
    link: z.string().optional(),
  }),
);
