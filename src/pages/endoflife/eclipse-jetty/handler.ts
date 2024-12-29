import type { endoflifeEclipseJettyRoute } from "./route";
import type { GetEclipseJettyResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeEclipseJettyHandler: RouteHandler<
  typeof endoflifeEclipseJettyRoute
> = async (c) => {
  const eclipseJettyInfoResponse = await fetch(
    "https://endoflife.date/api/eclipse-jetty.json",
  );
  const eclipseJettyInfo = (await eclipseJettyInfoResponse.json()) as z.infer<
    typeof GetEclipseJettyResponse200Schema
  >;
  return c.json(eclipseJettyInfo, 200);
};
