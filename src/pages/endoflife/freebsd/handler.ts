import type { endoflifeFreebsdRoute } from "./route";
import type { GetFreebsdResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeFreebsdHandler: RouteHandler<
  typeof endoflifeFreebsdRoute
> = async (c) => {
  const freebsdInfoResponse = await fetch(
    "https://endoflife.date/api/freebsd.json",
  );
  const freebsdInfo = (await freebsdInfoResponse.json()) as z.infer<
    typeof GetFreebsdResponse200Schema
  >;
  return c.json(freebsdInfo, 200);
};
