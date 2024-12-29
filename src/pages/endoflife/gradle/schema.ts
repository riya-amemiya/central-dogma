import { z } from "@hono/zod-openapi";

export const GetGradleResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    runningJavaVersions: z.union([z.string(), z.number()]),
    testedJavaVersions: z.string(),
    testedKotlinVersions: z.string(),
    testedGroovyVersions: z.string(),
    testedAndroidVersions: z.string(),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
  }),
);
