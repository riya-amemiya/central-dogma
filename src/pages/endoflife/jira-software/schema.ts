import { z } from "@hono/zod-openapi";

export const GetJiraSoftwareResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string().optional(),
    link: z.string(),
  }),
);
