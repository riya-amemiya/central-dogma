import { z } from "@hono/zod-openapi";

export const GetPanosResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string().optional(),
    link: z.string().optional(),
  }),
);
