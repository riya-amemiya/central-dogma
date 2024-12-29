import type { endoflifeReactRoute } from "./route";
import type { GetReactResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeReactHandler: RouteHandler<
  typeof endoflifeReactRoute
> = async (c) => {
  const reactInfoResponse = await fetch(
    "https://endoflife.date/api/react.json",
  );
  const reactInfo = (await reactInfoResponse.json()) as z.infer<
    typeof GetReactResponse200Schema
  >;
  return c.json(reactInfo, 200);
};
