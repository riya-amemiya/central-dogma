import type { endoflifeDotnetRoute } from "./route";
import type { GetDotnetResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDotnetHandler: RouteHandler<
  typeof endoflifeDotnetRoute
> = async (c) => {
  const dotnetInfoResponse = await fetch(
    "https://endoflife.date/api/dotnet.json",
  );
  const dotnetInfo = (await dotnetInfoResponse.json()) as z.infer<
    typeof GetDotnetResponse200Schema
  >;
  return c.json(dotnetInfo, 200);
};
