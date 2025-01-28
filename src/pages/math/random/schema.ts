import { z } from "@hono/zod-openapi";

export const GetRandomRequestQuerySchema = z.object({
  max: z.string().regex(/^\d+$/),
  min: z.string().regex(/^\d+$/).optional(),
});

export const GetRandomResponse200Schema = z.object({
  result: z.number(),
});

export const GetRandomResponse400Schema = z.object({
  error: z.string(),
});
