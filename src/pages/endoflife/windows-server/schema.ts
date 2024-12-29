import { z } from "@hono/zod-openapi";

export const GetWindowsServerResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    lts: z.boolean(),
    link: z.string(),
    support: z.string(),
    extendedSupport: z.union([z.string(), z.boolean()]),
  }),
);
