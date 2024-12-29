import type { endoflifeNutanixFilesRoute } from "./route";
import type { GetNutanixFilesResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNutanixFilesHandler: RouteHandler<
  typeof endoflifeNutanixFilesRoute
> = async (c) => {
  const nutanixFilesInfoResponse = await fetch(
    "https://endoflife.date/api/nutanix-files.json",
  );
  const nutanixFilesInfo = (await nutanixFilesInfoResponse.json()) as z.infer<
    typeof GetNutanixFilesResponse200Schema
  >;
  return c.json(nutanixFilesInfo, 200);
};
