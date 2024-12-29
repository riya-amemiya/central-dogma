import type { endoflifeCoderRoute } from "./route";
import type { GetCoderResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCoderHandler: RouteHandler<
  typeof endoflifeCoderRoute
> = async (c) => {
  const coderInfoResponse = await fetch(
    "https://endoflife.date/api/coder.json",
  );
  const coderInfo = (await coderInfoResponse.json()) as z.infer<
    typeof GetCoderResponse200Schema
  >;
  return c.json(coderInfo, 200);
};
