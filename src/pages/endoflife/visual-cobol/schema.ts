import { z } from "@hono/zod-openapi";

export const GetVisualCobolResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    lts: z.boolean(),
    link: z.string().optional(),
  }),
);
