import { z } from "@hono/zod-openapi";

export const GetUuidV7Response200Schema = z.object({
  uuid: z.string(),
});
