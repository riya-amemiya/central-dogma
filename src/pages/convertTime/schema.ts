import { z } from "@hono/zod-openapi";
export const GetConvertTimeResponse200Schema = z.object({
  result: z.string(),
});

export const GetConvertTimeRequestQuerySchema = z.object({
  value: z.string().regex(/\d+/),
  fromUnit: z.enum([
    "milliseconds",
    "seconds",
    "minutes",
    "hours",
    "ms",
    "s",
    "m",
    "h",
  ]),
  toUnit: z.enum([
    "milliseconds",
    "seconds",
    "minutes",
    "hours",
    "ms",
    "s",
    "m",
    "h",
  ]),
});
