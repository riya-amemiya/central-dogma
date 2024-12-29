import type { endoflifeRedHatOpenshiftRoute } from "./route";
import type { GetRedHatOpenshiftResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRedHatOpenshiftHandler: RouteHandler<
  typeof endoflifeRedHatOpenshiftRoute
> = async (c) => {
  const redHatOpenshiftInfoResponse = await fetch(
    "https://endoflife.date/api/red-hat-openshift.json",
  );
  const redHatOpenshiftInfo =
    (await redHatOpenshiftInfoResponse.json()) as z.infer<
      typeof GetRedHatOpenshiftResponse200Schema
    >;
  return c.json(redHatOpenshiftInfo, 200);
};
