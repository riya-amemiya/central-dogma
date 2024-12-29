import type { endoflifeScalaRoute } from "./route";
import type { GetScalaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeScalaHandler: RouteHandler<
  typeof endoflifeScalaRoute
> = async (c) => {
  const scalaInfoResponse = await fetch(
    "https://endoflife.date/api/scala.json",
  );
  const scalaInfo = (await scalaInfoResponse.json()) as z.infer<
    typeof GetScalaResponse200Schema
  >;
  return c.json(scalaInfo, 200);
};
