import { z } from "@hono/zod-openapi";

export const GetIntelProcessorsResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    discontinued: z.union([z.string(), z.boolean()]),
    eol: z.union([z.string(), z.boolean()]),
    link: z.string(),
    lts: z.boolean(),
    releaseLabel: z.string().optional(),
  }),
);
