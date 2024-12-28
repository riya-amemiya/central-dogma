import { uuidv7 } from "umt/module/Math/uuidv7";

import type { uuidV7Route } from "./route";
import type { RouteHandler } from "@hono/zod-openapi";

export const uuidV7Handler: RouteHandler<typeof uuidV7Route> = async (c) => {
  return c.json(
    {
      uuid: uuidv7(),
    },
    200,
  );
};
