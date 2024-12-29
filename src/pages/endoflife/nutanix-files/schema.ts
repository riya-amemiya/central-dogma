import { z } from "@hono/zod-openapi";

export const GetNutanixFilesResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
    latestReleaseDate: z.string().optional(),
  }),
);
