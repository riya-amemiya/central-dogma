import { z } from "@hono/zod-openapi";

export const GetGoogleNexusResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    discontinued: z.union([z.string(), z.boolean()]),
    eol: z.union([z.string(), z.boolean()]),
    link: z.string(),
    supportedAndroidVersions: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
  }),
);
