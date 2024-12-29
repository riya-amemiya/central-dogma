import type { endoflifeElixirRoute } from "./route";
import type { GetElixirResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeElixirHandler: RouteHandler<
  typeof endoflifeElixirRoute
> = async (c) => {
  const elixirInfoResponse = await fetch(
    "https://endoflife.date/api/elixir.json",
  );
  const elixirInfo = (await elixirInfoResponse.json()) as z.infer<
    typeof GetElixirResponse200Schema
  >;
  return c.json(elixirInfo, 200);
};
