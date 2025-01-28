import { z } from "@hono/zod-openapi";

export const GetUuidsV7RequestQuerySchema = z.object({
  length: z
    .string()
    .regex(/\d+/, "length must be a number")
    .transform(Number)
    .refine((n) => n > 0, "length must be greater than 0")
    .refine((n) => n <= 100, "length must be less than or equal to 100")
    .optional(),
});

export const GetUuidsV7Response200Schema = z.object({
  uuids: z.array(z.string()),
});

export const GetUuidsV7Response400Schema = z.object({
  error: z.string(),
});
