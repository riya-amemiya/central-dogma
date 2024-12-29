import type { endoflifeVuetifyRoute } from "./route";
import type { GetVuetifyResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVuetifyHandler: RouteHandler<
  typeof endoflifeVuetifyRoute
> = async (c) => {
  const vuetifyInfoResponse = await fetch(
    "https://endoflife.date/api/vuetify.json",
  );
  const vuetifyInfo = (await vuetifyInfoResponse.json()) as z.infer<
    typeof GetVuetifyResponse200Schema
  >;
  return c.json(vuetifyInfo, 200);
};
