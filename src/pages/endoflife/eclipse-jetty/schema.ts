import { z } from "@hono/zod-openapi";

export const GetEclipseJettyResponse200Schema = z.array(
  z.object({
    cycle: z.string(),
    releaseDate: z.string(),
    minJvmVersion: z.number(),
    servletVersion: z.union([z.string(), z.number()]),
    jspVersion: z.union([z.string(), z.number()]),
    eol: z.union([z.string(), z.boolean()]),
    latest: z.string(),
    latestReleaseDate: z.string(),
    lts: z.boolean(),
    support: z.union([z.string(), z.boolean()]),
    extendedSupport: z.boolean(),
  }),
);
