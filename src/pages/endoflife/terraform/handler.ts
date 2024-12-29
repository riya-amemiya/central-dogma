import type { endoflifeTerraformRoute } from "./route";
import type { GetTerraformResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeTerraformHandler: RouteHandler<
  typeof endoflifeTerraformRoute
> = async (c) => {
  const terraformInfoResponse = await fetch(
    "https://endoflife.date/api/terraform.json",
  );
  const terraformInfo = (await terraformInfoResponse.json()) as z.infer<
    typeof GetTerraformResponse200Schema
  >;
  return c.json(terraformInfo, 200);
};
