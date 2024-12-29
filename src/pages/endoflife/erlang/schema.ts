import { z } from "@hono/zod-openapi";

export const GetErlangResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    support: z.union([z.string(), z.boolean()]),
  }),
);
