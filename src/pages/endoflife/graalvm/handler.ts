import type { endoflifeGraalvmRoute } from "./route";
import type { GetGraalvmResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGraalvmHandler: RouteHandler<
  typeof endoflifeGraalvmRoute
> = async (c) => {
  const graalvmInfoResponse = await fetch(
    "https://endoflife.date/api/graalvm.json",
  );
  const graalvmInfo = (await graalvmInfoResponse.json()) as z.infer<
    typeof GetGraalvmResponse200Schema
  >;
  return c.json(graalvmInfo, 200);
};
