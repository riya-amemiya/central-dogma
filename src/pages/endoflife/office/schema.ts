import { z } from "@hono/zod-openapi";

export const GetOfficeResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    outOfOrder: z.boolean().optional(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    link: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
    releaseLabel: z.string().optional(),
  }),
);
