import { isNumber, random } from "umt/module";

import type { randomRoute } from "./route";
import type { RouteHandler } from "@hono/zod-openapi";

export const randomHandler: RouteHandler<typeof randomRoute> = async (c) => {
  const { max, min = 0 } = c.req.valid("query");
  if (!(isNumber(max) && isNumber(min))) {
    return c.json(
      {
        error: "Max and Min must be numbers",
      },
      400,
    );
  }
  const maxNumber = Number(max);
  const minNumber = Number(min);
  if (maxNumber < minNumber) {
    return c.json(
      {
        error: "Max must be greater than or equal to Min",
      },
      400,
    );
  }
  return c.json(
    {
      result: random(maxNumber, minNumber),
    },
    200,
  );
};
