import type { endoflifeMxlinuxRoute } from "./route";
import type { GetMxlinuxResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMxlinuxHandler: RouteHandler<
  typeof endoflifeMxlinuxRoute
> = async (c) => {
  const mxlinuxInfoResponse = await fetch(
    "https://endoflife.date/api/mxlinux.json",
  );
  const mxlinuxInfo = (await mxlinuxInfoResponse.json()) as z.infer<
    typeof GetMxlinuxResponse200Schema
  >;
  return c.json(mxlinuxInfo, 200);
};
