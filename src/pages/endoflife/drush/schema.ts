import { z } from "@hono/zod-openapi";

export const GetDrushResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    supportedPhpVersions: z.string(),
    supportedDrupalVersions: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
  }),
);
