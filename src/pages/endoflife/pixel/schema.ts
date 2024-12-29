import { z } from "@hono/zod-openapi";

export const GetPixelResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    discontinued: z.union([z.string(), z.boolean()]),
    eol: z.string(),
    link: z.string(),
    supportedAndroidVersions: z.string(),
    lts: z.boolean(),
    support: z.string(),
  }),
);
