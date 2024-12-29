import { z } from "@hono/zod-openapi";

export const GetRaspberryPiResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    discontinued: z.string(),
    link: z.string(),
    lts: z.boolean(),
  }),
);
