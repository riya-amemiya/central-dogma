import { z } from "@hono/zod-openapi";

export const GetAnsibleCoreResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    pythonVersionsControlNode: z.string(),
    pythonVersionsManagedNode: z.string(),
    powershellVersionsManagedNode: z.union([z.string(), z.number()]),
    releaseDate: z.string(),
    eol: z.string(),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
  }),
);
