import { z } from "@hono/zod-openapi";

export const GetFairphoneResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    supportedAndroidVersions: z.string(),
    releaseDate: z.string(),
    discontinued: z.union([z.string(), z.boolean()]),
    eol: z.string(),
    link: z.string(),
    lts: z.boolean(),
    support: z.boolean(),
  }),
);
