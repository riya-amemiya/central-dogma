import { z } from "@hono/zod-openapi";

export const GetEndoflifeAngularResponse200Schema = z.object({
  cycle: z.string(),
  releaseDate: z.string(),
  eol: z.string(),
  latest: z.string(),
  latestReleaseDate: z.string(),
  lts: z.boolean(),
  support: z.string(),
  extendedSupport: z.boolean(),
});
