import { z } from "@hono/zod-openapi";

export const GetSteamosResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    codename: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    discontinued: z.boolean(),
    lts: z.boolean(),
  }),
);
