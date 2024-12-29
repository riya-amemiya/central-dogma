import { z } from "@hono/zod-openapi";

export const GetRedhatBuildOfOpenjdkResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    releaseLabel: z.string().optional(),
    link: z.any().optional(),
  }),
);
