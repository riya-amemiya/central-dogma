import type { endoflifeMongodbRoute } from "./route";
import type { GetMongodbResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMongodbHandler: RouteHandler<
  typeof endoflifeMongodbRoute
> = async (c) => {
  const mongodbInfoResponse = await fetch(
    "https://endoflife.date/api/mongodb.json",
  );
  const mongodbInfo = (await mongodbInfoResponse.json()) as z.infer<
    typeof GetMongodbResponse200Schema
  >;
  return c.json(mongodbInfo, 200);
};
