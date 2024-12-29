import { z } from "@hono/zod-openapi";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const GetLog4jResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    outOfOrder: z.boolean().optional(),
    link: z.string().optional(),
  }),
);
