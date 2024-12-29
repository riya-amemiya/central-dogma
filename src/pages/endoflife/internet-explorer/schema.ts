import { z } from "@hono/zod-openapi";

export const GetInternetExplorerResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    link: z.string().optional(),
    lts: z.boolean(),
    releaseLabel: z.string().optional(),
  }),
);
