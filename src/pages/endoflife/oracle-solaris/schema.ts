import { z } from "@hono/zod-openapi";

export const GetOracleSolarisResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    link: z.string(),
    lts: z.boolean(),
    extendedSupport: z.union([z.string(), z.boolean()]),
  }),
);
