import { z } from "@hono/zod-openapi";

export const GetTomcatResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    minJavaVersion: z.number(),
    latest: z.string(),
    latestReleaseDate: z.string().optional(),
    lts: z.boolean(),
  }),
);
