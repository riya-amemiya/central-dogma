import type { endoflifeMicrosoftBuildOfOpenjdkRoute } from "./route";
import type { GetMicrosoftBuildOfOpenjdkResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMicrosoftBuildOfOpenjdkHandler: RouteHandler<
  typeof endoflifeMicrosoftBuildOfOpenjdkRoute
> = async (c) => {
  const microsoftBuildOfOpenjdkInfoResponse = await fetch(
    "https://endoflife.date/api/microsoft-build-of-openjdk.json",
  );
  const microsoftBuildOfOpenjdkInfo =
    (await microsoftBuildOfOpenjdkInfoResponse.json()) as z.infer<
      typeof GetMicrosoftBuildOfOpenjdkResponse200Schema
    >;
  return c.json(microsoftBuildOfOpenjdkInfo, 200);
};
