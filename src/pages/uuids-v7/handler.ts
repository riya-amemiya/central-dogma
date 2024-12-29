import { isNumber } from "umt/module";
import { uuidv7 } from "umt/module/Math/uuidv7";

import type { uuidsV7Route } from "./route";
import type { RouteHandler } from "@hono/zod-openapi";

export const uuidsV7Handler: RouteHandler<typeof uuidsV7Route> = async (c) => {
  const { limit } = c.req.query();
  const length = isNumber(limit) ? Number(limit) : 1;
  if (length < 1) {
    return c.json(
      {
        error: "Limit must be a number greater than 0",
      },
      400,
    );
  }

  if (length > 100) {
    return c.json(
      {
        error: "Limit must be a number less than or equal to 100",
      },
      400,
    );
  }
  return c.json(
    {
      uuids: Array.from({ length }, () => uuidv7()),
    },
    200,
  );
};
