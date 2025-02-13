import { z } from "@hono/zod-openapi";

export const GetPangpResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string().optional(),
    link: z.string().optional(),
    lts: z.boolean(),
    support: z.string(),
  }),
);
