import { uuidv7 } from "umt/module/Math/uuidv7";

import type { uuidsV7Route } from "./route";
import type { RouteHandler } from "@hono/zod-openapi";

export const uuidsV7Handler: RouteHandler<typeof uuidsV7Route> = async (c) => {
  const { length } = c.req.valid("query");
  if (!length) {
    return c.json(
      {
        error: "length is required",
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
