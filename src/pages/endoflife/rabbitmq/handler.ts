import type { endoflifeRabbitmqRoute } from "./route";
import type { GetRabbitmqResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRabbitmqHandler: RouteHandler<
  typeof endoflifeRabbitmqRoute
> = async (c) => {
  const rabbitmqInfoResponse = await fetch(
    "https://endoflife.date/api/rabbitmq.json",
  );
  const rabbitmqInfo = (await rabbitmqInfoResponse.json()) as z.infer<
    typeof GetRabbitmqResponse200Schema
  >;
  return c.json(rabbitmqInfo, 200);
};
