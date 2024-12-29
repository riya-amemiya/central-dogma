import type { endoflifeErlangRoute } from "./route";
import type { GetErlangResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeErlangHandler: RouteHandler<
  typeof endoflifeErlangRoute
> = async (c) => {
  const erlangInfoResponse = await fetch(
    "https://endoflife.date/api/erlang.json",
  );
  const erlangInfo = (await erlangInfoResponse.json()) as z.infer<
    typeof GetErlangResponse200Schema
  >;
  return c.json(erlangInfo, 200);
};
