import type { endoflifeTarantoolRoute } from "./route";
import type { GetTarantoolResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeTarantoolHandler: RouteHandler<
  typeof endoflifeTarantoolRoute
> = async (c) => {
  const tarantoolInfoResponse = await fetch(
    "https://endoflife.date/api/tarantool.json",
  );
  const tarantoolInfo = (await tarantoolInfoResponse.json()) as z.infer<
    typeof GetTarantoolResponse200Schema
  >;
  return c.json(tarantoolInfo, 200);
};
