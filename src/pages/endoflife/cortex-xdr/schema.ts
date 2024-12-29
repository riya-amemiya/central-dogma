import { z } from "@hono/zod-openapi";

export const GetCortexXdrResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string().optional(),
  }),
);