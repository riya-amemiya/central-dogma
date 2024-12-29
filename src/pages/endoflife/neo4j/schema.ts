import { z } from "@hono/zod-openapi";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const GetNeo4jResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    link: z.string().optional(),
    lts: z.boolean(),
  }),
);
