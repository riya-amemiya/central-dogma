import { z } from "@hono/zod-openapi";

export const GetOracleDatabaseResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    lts: z.boolean(),
    eol: z.string(),
    link: z.string().optional(),
    extendedSupport: z.union([z.string(), z.boolean()]),
  }),
);
