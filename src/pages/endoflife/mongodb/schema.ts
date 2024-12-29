import { z } from "@hono/zod-openapi";

export const GetMongodbResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    releaseLabel: z.string().optional(),
    link: z.string().optional(),
  }),
);
