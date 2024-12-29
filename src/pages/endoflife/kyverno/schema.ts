import { z } from "@hono/zod-openapi";

export const GetKyvernoResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    supportedK8sVersions: z.string(),
    lts: z.boolean(),
  }),
);
