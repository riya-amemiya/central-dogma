import { z } from "@hono/zod-openapi";

export const GetFreebsdResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    lts: z.boolean(),
    link: z.any().optional(),
  }),
);
