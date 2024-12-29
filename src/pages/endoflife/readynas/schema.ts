import { z } from "@hono/zod-openapi";

export const GetReadynasResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    eol: z.boolean(),
    lts: z.boolean(),
  }),
);
