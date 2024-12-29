import type { endoflifeLibreofficeRoute } from "./route";
import type { GetLibreofficeResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeLibreofficeHandler: RouteHandler<
  typeof endoflifeLibreofficeRoute
> = async (c) => {
  const libreofficeInfoResponse = await fetch(
    "https://endoflife.date/api/libreoffice.json",
  );
  const libreofficeInfo = (await libreofficeInfoResponse.json()) as z.infer<
    typeof GetLibreofficeResponse200Schema
  >;
  return c.json(libreofficeInfo, 200);
};
