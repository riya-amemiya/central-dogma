import { z } from "@hono/zod-openapi";

export const GetPixelWatchResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    discontinued: z.boolean(),
    link: z.string(),
    supportedAndroidVersions: z.union([z.string(), z.number()]),
    lts: z.boolean(),
    support: z.string(),
  }),
);
