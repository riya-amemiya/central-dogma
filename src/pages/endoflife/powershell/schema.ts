import { z } from "@hono/zod-openapi";

export const GetPowershellResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string().optional(),
    link: z.any().optional(),
  }),
);
