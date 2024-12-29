import { z } from "@hono/zod-openapi";

export const GetCkeditorResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    lts: z.boolean(),
    support: z.boolean(),
    extendedSupport: z.union([z.string(), z.boolean()]),
  }),
);
