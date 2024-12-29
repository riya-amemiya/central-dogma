import { z } from "@hono/zod-openapi";

export const GetApacheCassandraResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    discontinued: z.boolean().optional(),
  }),
);
