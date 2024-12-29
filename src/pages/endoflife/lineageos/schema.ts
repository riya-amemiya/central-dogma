import { z } from "@hono/zod-openapi";

export const GetLineageosResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    link: z.string(),
    androidVersion: z.union([z.string(), z.number()]),
    lts: z.boolean(),
  }),
);
