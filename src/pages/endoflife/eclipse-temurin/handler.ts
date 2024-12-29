import type { endoflifeEclipseTemurinRoute } from "./route";
import type { GetEclipseTemurinResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeEclipseTemurinHandler: RouteHandler<
  typeof endoflifeEclipseTemurinRoute
> = async (c) => {
  const eclipseTemurinInfoResponse = await fetch(
    "https://endoflife.date/api/eclipse-temurin.json",
  );
  const eclipseTemurinInfo =
    (await eclipseTemurinInfoResponse.json()) as z.infer<
      typeof GetEclipseTemurinResponse200Schema
    >;
  return c.json(eclipseTemurinInfo, 200);
};
