import { z } from "@hono/zod-openapi";

export const GetAmazonGlueResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseLabel: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    pythonVersion: z.string(),
    sparkVersion: z.string(),
    link: z.string(),
    lts: z.boolean(),
  }),
);
