import { z } from "@hono/zod-openapi";

export const GetKedaResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    supportedKubernetesVersions: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
  }),
);
