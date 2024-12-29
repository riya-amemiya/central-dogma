import type { endoflifeApacheKafkaRoute } from "./route";
import type { GetApacheKafkaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheKafkaHandler: RouteHandler<
  typeof endoflifeApacheKafkaRoute
> = async (c) => {
  const apacheKafkaInfoResponse = await fetch(
    "https://endoflife.date/api/apache-kafka.json",
  );
  const apacheKafkaInfo = (await apacheKafkaInfoResponse.json()) as z.infer<
    typeof GetApacheKafkaResponse200Schema
  >;
  return c.json(apacheKafkaInfo, 200);
};
