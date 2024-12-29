import { z } from "@hono/zod-openapi";

export const GetFilemakerResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    link: z.string(),
    lts: z.boolean(),
  }),
);
