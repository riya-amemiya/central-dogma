import type { endoflifeAnsibleRoute } from "./route";
import type { GetAnsibleResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAnsibleHandler: RouteHandler<
  typeof endoflifeAnsibleRoute
> = async (c) => {
  const ansibleInfoResponse = await fetch(
    "https://endoflife.date/api/ansible.json",
  );
  const ansibleInfo = (await ansibleInfoResponse.json()) as z.infer<
    typeof GetAnsibleResponse200Schema
  >;
  return c.json(ansibleInfo, 200);
};
