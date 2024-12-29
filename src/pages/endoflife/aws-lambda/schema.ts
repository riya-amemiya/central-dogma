import { z } from "@hono/zod-openapi";

export const GetAwsLambdaResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    link: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
  }),
);
