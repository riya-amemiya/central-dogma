import type { endoflifeAzureDevopsServerRoute } from "./route";
import type { GetAzureDevopsServerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAzureDevopsServerHandler: RouteHandler<
  typeof endoflifeAzureDevopsServerRoute
> = async (c) => {
  const azureDevopsServerInfoResponse = await fetch(
    "https://endoflife.date/api/azure-devops-server.json",
  );
  const azureDevopsServerInfo =
    (await azureDevopsServerInfoResponse.json()) as z.infer<
      typeof GetAzureDevopsServerResponse200Schema
    >;
  return c.json(azureDevopsServerInfo, 200);
};
