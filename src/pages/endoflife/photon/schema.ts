import { z } from "@hono/zod-openapi";

export const GetPhotonResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    link: z.string(),
    kernelVersion: z.number(),
    lts: z.boolean(),
  }),
);
