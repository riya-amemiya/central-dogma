import type { endoflifeNutanixAosRoute } from "./route";
import type { GetNutanixAosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNutanixAosHandler: RouteHandler<
  typeof endoflifeNutanixAosRoute
> = async (c) => {
  const nutanixAosInfoResponse = await fetch(
    "https://endoflife.date/api/nutanix-aos.json",
  );
  const nutanixAosInfo = (await nutanixAosInfoResponse.json()) as z.infer<
    typeof GetNutanixAosResponse200Schema
  >;
  return c.json(nutanixAosInfo, 200);
};
