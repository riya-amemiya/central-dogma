import { z } from "@hono/zod-openapi";

export const GetNvidiaGpuResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    discontinued: z.boolean(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
  }),
);
