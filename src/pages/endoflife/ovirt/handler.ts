import type { endoflifeOvirtRoute } from "./route";
import type { GetOvirtResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOvirtHandler: RouteHandler<
  typeof endoflifeOvirtRoute
> = async (c) => {
  const ovirtInfoResponse = await fetch(
    "https://endoflife.date/api/ovirt.json",
  );
  const ovirtInfo = (await ovirtInfoResponse.json()) as z.infer<
    typeof GetOvirtResponse200Schema
  >;
  return c.json(ovirtInfo, 200);
};
