import type { endoflifeRustRoute } from "./route";
import type { GetRustResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRustHandler: RouteHandler<
  typeof endoflifeRustRoute
> = async (c) => {
  const rustInfoResponse = await fetch("https://endoflife.date/api/rust.json");
  const rustInfo = (await rustInfoResponse.json()) as z.infer<
    typeof GetRustResponse200Schema
  >;
  return c.json(rustInfo, 200);
};
