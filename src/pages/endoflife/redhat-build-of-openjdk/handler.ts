import type { endoflifeRedhatBuildOfOpenjdkRoute } from "./route";
import type { GetRedhatBuildOfOpenjdkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRedhatBuildOfOpenjdkHandler: RouteHandler<
  typeof endoflifeRedhatBuildOfOpenjdkRoute
> = async (c) => {
  const redhatBuildOfOpenjdkInfoResponse = await fetch(
    "https://endoflife.date/api/redhat-build-of-openjdk.json",
  );
  const redhatBuildOfOpenjdkInfo =
    (await redhatBuildOfOpenjdkInfoResponse.json()) as z.infer<
      typeof GetRedhatBuildOfOpenjdkResponse200Schema
    >;
  return c.json(redhatBuildOfOpenjdkInfo, 200);
};
