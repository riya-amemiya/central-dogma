import type { endoflifeFirefoxRoute } from "./route";
import type { GetFirefoxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeFirefoxHandler: RouteHandler<
  typeof endoflifeFirefoxRoute
> = async (c) => {
  const firefoxInfoResponse = await fetch(
    "https://endoflife.date/api/firefox.json",
  );
  const firefoxInfo = (await firefoxInfoResponse.json()) as z.infer<
    typeof GetFirefoxResponse200Schema
  >;
  return c.json(firefoxInfo, 200);
};
