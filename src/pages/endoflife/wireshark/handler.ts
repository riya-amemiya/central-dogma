import type { endoflifeWiresharkRoute } from "./route";
import type { GetWiresharkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWiresharkHandler: RouteHandler<
  typeof endoflifeWiresharkRoute
> = async (c) => {
  const wiresharkInfoResponse = await fetch(
    "https://endoflife.date/api/wireshark.json",
  );
  const wiresharkInfo = (await wiresharkInfoResponse.json()) as z.infer<
    typeof GetWiresharkResponse200Schema
  >;
  return c.json(wiresharkInfo, 200);
};
