import type { endoflifeFluentBitRoute } from "./route";
import type { GetFluentBitResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeFluentBitHandler: RouteHandler<
  typeof endoflifeFluentBitRoute
> = async (c) => {
  const fluentBitInfoResponse = await fetch(
    "https://endoflife.date/api/fluent-bit.json",
  );
  const fluentBitInfo = (await fluentBitInfoResponse.json()) as z.infer<
    typeof GetFluentBitResponse200Schema
  >;
  return c.json(fluentBitInfo, 200);
};
