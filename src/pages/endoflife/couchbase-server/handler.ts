import type { endoflifeCouchbaseServerRoute } from "./route";
import type { GetCouchbaseServerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCouchbaseServerHandler: RouteHandler<
  typeof endoflifeCouchbaseServerRoute
> = async (c) => {
  const couchbaseServerInfoResponse = await fetch(
    "https://endoflife.date/api/couchbase-server.json",
  );
  const couchbaseServerInfo =
    (await couchbaseServerInfoResponse.json()) as z.infer<
      typeof GetCouchbaseServerResponse200Schema
    >;
  return c.json(couchbaseServerInfo, 200);
};
