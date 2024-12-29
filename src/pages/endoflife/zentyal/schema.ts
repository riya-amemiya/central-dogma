import { z } from "@hono/zod-openapi";

export const GetZentyalResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    ubuntuVersion: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    lts: z.boolean(),
    extendedSupport: z.string(),
  }),
);
