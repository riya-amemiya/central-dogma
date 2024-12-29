import type { endoflifeMotorolaMobilityRoute } from "./route";
import type { GetMotorolaMobilityResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMotorolaMobilityHandler: RouteHandler<
  typeof endoflifeMotorolaMobilityRoute
> = async (c) => {
  const motorolaMobilityInfoResponse = await fetch(
    "https://endoflife.date/api/motorola-mobility.json",
  );
  const motorolaMobilityInfo =
    (await motorolaMobilityInfoResponse.json()) as z.infer<
      typeof GetMotorolaMobilityResponse200Schema
    >;
  return c.json(motorolaMobilityInfo, 200);
};
