import { z } from "@hono/zod-openapi";

export const GetIonicResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    minAngularVersion: z.string(),
    maxAngularVersion: z.string(),
    supportedReactVersions: z.string(),
    supportedVueVersions: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
    extendedSupport: z.union([z.string(), z.boolean()]),
  }),
);
