import type { endoflifeBazelRoute } from "./route";
import type { GetBazelResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeBazelHandler: RouteHandler<
  typeof endoflifeBazelRoute
> = async (c) => {
  const bazelInfoResponse = await fetch(
    "https://endoflife.date/api/bazel.json",
  );
  const bazelInfo = (await bazelInfoResponse.json()) as z.infer<
    typeof GetBazelResponse200Schema
  >;
  return c.json(bazelInfo, 200);
};
