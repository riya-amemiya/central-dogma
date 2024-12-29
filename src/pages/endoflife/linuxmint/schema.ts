import { z } from "@hono/zod-openapi";

export const GetLinuxmintResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string().optional(),
    lts: z.boolean(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    link: z.string(),
    support: z.union([z.string(), z.boolean()]),
    releaseLabel: z.string().optional(),
  }),
);
