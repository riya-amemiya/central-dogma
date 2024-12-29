import { z } from "@hono/zod-openapi";

export const GetPciDssResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    lts: z.boolean(),
    link: z.string().optional(),
  }),
);
