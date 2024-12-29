import type { endoflifeMicronautRoute } from "./route";
import type { GetMicronautResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMicronautHandler: RouteHandler<
  typeof endoflifeMicronautRoute
> = async (c) => {
  const micronautInfoResponse = await fetch(
    "https://endoflife.date/api/micronaut.json",
  );
  const micronautInfo = (await micronautInfoResponse.json()) as z.infer<
    typeof GetMicronautResponse200Schema
  >;
  return c.json(micronautInfo, 200);
};
