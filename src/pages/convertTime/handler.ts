import { convertTime } from "umt";

import type { convertTimeRoute } from "./route";
import type { RouteHandler } from "@hono/zod-openapi";

export const convertTimeHandler: RouteHandler<typeof convertTimeRoute> = async (
  c,
) => {
  const query = c.req.valid("query");
  return c.json(
    {
      result: String(convertTime(query.value, query.fromUnit, query.toUnit)),
    },
    200,
  );
};
