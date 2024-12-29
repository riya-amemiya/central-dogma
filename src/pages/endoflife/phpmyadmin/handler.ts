import type { endoflifePhpmyadminRoute } from "./route";
import type { GetPhpmyadminResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePhpmyadminHandler: RouteHandler<
  typeof endoflifePhpmyadminRoute
> = async (c) => {
  const phpmyadminInfoResponse = await fetch(
    "https://endoflife.date/api/phpmyadmin.json",
  );
  const phpmyadminInfo = (await phpmyadminInfoResponse.json()) as z.infer<
    typeof GetPhpmyadminResponse200Schema
  >;
  return c.json(phpmyadminInfo, 200);
};
