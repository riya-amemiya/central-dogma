import { z } from "@hono/zod-openapi";

export const GetForgejoResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    lts: z.boolean(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string().optional(),
  }),
);
