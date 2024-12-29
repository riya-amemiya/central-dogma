import type { endoflifePhotonRoute } from "./route";
import type { GetPhotonResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePhotonHandler: RouteHandler<
  typeof endoflifePhotonRoute
> = async (c) => {
  const photonInfoResponse = await fetch(
    "https://endoflife.date/api/photon.json",
  );
  const photonInfo = (await photonInfoResponse.json()) as z.infer<
    typeof GetPhotonResponse200Schema
  >;
  return c.json(photonInfo, 200);
};
