import { z } from "@hono/zod-openapi";

export const GetSubversionResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.boolean(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    link: z.any().optional(),
  }),
);
