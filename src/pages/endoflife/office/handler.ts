import type { endoflifeOfficeRoute } from "./route";
import type { GetOfficeResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeOfficeHandler: RouteHandler<
  typeof endoflifeOfficeRoute
> = async (c) => {
  const officeInfoResponse = await fetch(
    "https://endoflife.date/api/office.json",
  );
  const officeInfo = (await officeInfoResponse.json()) as z.infer<
    typeof GetOfficeResponse200Schema
  >;
  return c.json(officeInfo, 200);
};
