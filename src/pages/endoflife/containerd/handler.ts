import type { endoflifeContainerdRoute } from "./route";
import type { GetContainerdResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeContainerdHandler: RouteHandler<
  typeof endoflifeContainerdRoute
> = async (c) => {
  const containerdInfoResponse = await fetch(
    "https://endoflife.date/api/containerd.json",
  );
  const containerdInfo = (await containerdInfoResponse.json()) as z.infer<
    typeof GetContainerdResponse200Schema
  >;
  return c.json(containerdInfo, 200);
};
