import type { endoflifeRaspberryPiRoute } from "./route";
import type { GetRaspberryPiResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRaspberryPiHandler: RouteHandler<
  typeof endoflifeRaspberryPiRoute
> = async (c) => {
  const raspberryPiInfoResponse = await fetch(
    "https://endoflife.date/api/raspberry-pi.json",
  );
  const raspberryPiInfo = (await raspberryPiInfoResponse.json()) as z.infer<
    typeof GetRaspberryPiResponse200Schema
  >;
  return c.json(raspberryPiInfo, 200);
};
