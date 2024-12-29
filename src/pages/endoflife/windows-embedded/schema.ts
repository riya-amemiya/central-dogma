import { z } from "@hono/zod-openapi";

export const GetWindowsEmbeddedResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    link: z.string(),
    lts: z.boolean(),
    support: z.string(),
  }),
);
