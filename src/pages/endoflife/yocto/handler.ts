import type { endoflifeYoctoRoute } from "./route";
import type { GetYoctoResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeYoctoHandler: RouteHandler<
  typeof endoflifeYoctoRoute
> = async (c) => {
  const yoctoInfoResponse = await fetch(
    "https://endoflife.date/api/yocto.json",
  );
  const yoctoInfo = (await yoctoInfoResponse.json()) as z.infer<
    typeof GetYoctoResponse200Schema
  >;
  return c.json(yoctoInfo, 200);
};
