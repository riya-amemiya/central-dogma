import { z } from "@hono/zod-openapi";

export const GetAndroidResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string().optional(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    lts: z.boolean(),
    releaseLabel: z.string().optional(),
    link: z.string().optional(),
  }),
);
