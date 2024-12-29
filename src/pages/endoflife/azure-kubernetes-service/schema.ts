import { z } from "@hono/zod-openapi";

export const GetAzureKubernetesServiceResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.string(),
    link: z.string(),
    lts: z.union([z.string(), z.boolean()]),
    support: z.string().optional(),
  }),
);
