import { z } from "@hono/zod-openapi";

export const GetOpenzfsResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    supportedLinux: z.string(),
    supportedFreeBSD: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
  }),
);
