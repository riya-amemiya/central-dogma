import { z } from "@hono/zod-openapi";

export const GetAppleWatchResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    discontinued: z.union([z.string(), z.boolean()]),
    eol: z.union([z.string(), z.boolean()]),
    link: z.string(),
    supportedWatchOsVersions: z.union([z.string(), z.number()]),
    lts: z.boolean(),
  }),
);
