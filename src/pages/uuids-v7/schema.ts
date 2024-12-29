import { z } from "@hono/zod-openapi";

export const GetUuidsV7RequestQuerySchema = z.object({
  limit: z.string().optional(),
});

export const GetUuidsV7Response200Schema = z.object({
  uuids: z.array(z.string()),
});

export const GetUuidsV7Response400Schema = z.object({
  error: z.string(),
});
