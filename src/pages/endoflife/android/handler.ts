import type { endoflifeAndroidRoute } from "./route";
import type { GetAndroidResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAndroidHandler: RouteHandler<
  typeof endoflifeAndroidRoute
> = async (c) => {
  const androidInfoResponse = await fetch(
    "https://endoflife.date/api/android.json",
  );
  const androidInfo = (await androidInfoResponse.json()) as z.infer<
    typeof GetAndroidResponse200Schema
  >;
  return c.json(androidInfo, 200);
};
