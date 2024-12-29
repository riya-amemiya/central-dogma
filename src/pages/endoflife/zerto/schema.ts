import { z } from "@hono/zod-openapi";

export const GetZertoResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string().optional(),
    releaseDate: z.string(),
    eol: z.string(),
    link: z.string().optional(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
  }),
);
