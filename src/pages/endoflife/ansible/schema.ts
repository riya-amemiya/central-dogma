import { z } from "@hono/zod-openapi";

export const GetAnsibleResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    ansibleCoreVersion: z.string(),
    pythonVersionsControlNode: z.string(),
    pythonVersionsManagedNode: z.string(),
    powershellVersionsManagedNode: z.union([z.string(), z.number()]),
    releaseDate: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    link: z.string().optional(),
  }),
);
