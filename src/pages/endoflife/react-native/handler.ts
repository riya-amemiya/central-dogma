import type { endoflifeReactNativeRoute } from "./route";
import type { GetReactNativeResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeReactNativeHandler: RouteHandler<
  typeof endoflifeReactNativeRoute
> = async (c) => {
  const reactNativeInfoResponse = await fetch(
    "https://endoflife.date/api/react-native.json",
  );
  const reactNativeInfo = (await reactNativeInfoResponse.json()) as z.infer<
    typeof GetReactNativeResponse200Schema
  >;
  return c.json(reactNativeInfo, 200);
};
