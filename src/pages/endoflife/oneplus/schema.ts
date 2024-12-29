import { z } from "@hono/zod-openapi";

export const GetOneplusResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    support: z.string(),
    eol: z.string(),
    discontinued: z.boolean(),
    link: z.string(),
    supportedOxygenOSVersions: z.union([z.string(), z.number()]),
    lts: z.boolean(),
  }),
);
