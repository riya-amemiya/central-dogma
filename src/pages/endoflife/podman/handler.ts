import type { endoflifePodmanRoute } from "./route";
import type { GetPodmanResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePodmanHandler: RouteHandler<
  typeof endoflifePodmanRoute
> = async (c) => {
  const podmanInfoResponse = await fetch(
    "https://endoflife.date/api/podman.json",
  );
  const podmanInfo = (await podmanInfoResponse.json()) as z.infer<
    typeof GetPodmanResponse200Schema
  >;
  return c.json(podmanInfo, 200);
};
