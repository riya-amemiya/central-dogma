import { z } from "@hono/zod-openapi";

export const GetRos2Response200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    lts: z.boolean(),
    link: z.string().optional(),
  }),
);
