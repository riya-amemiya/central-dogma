import { z } from "@hono/zod-openapi";

export const GetVisualStudioResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    link: z.string().optional(),
  }),
);
