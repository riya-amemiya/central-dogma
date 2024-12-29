import type { endoflifeSpringBootRoute } from "./route";
import type { GetSpringBootResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSpringBootHandler: RouteHandler<
  typeof endoflifeSpringBootRoute
> = async (c) => {
  const springBootInfoResponse = await fetch(
    "https://endoflife.date/api/spring-boot.json",
  );
  const springBootInfo = (await springBootInfoResponse.json()) as z.infer<
    typeof GetSpringBootResponse200Schema
  >;
  return c.json(springBootInfo, 200);
};
