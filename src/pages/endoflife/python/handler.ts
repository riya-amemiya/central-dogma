import type { endoflifePythonRoute } from "./route";
import type { GetPythonResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePythonHandler: RouteHandler<
  typeof endoflifePythonRoute
> = async (c) => {
  const pythonInfoResponse = await fetch(
    "https://endoflife.date/api/python.json",
  );
  const pythonInfo = (await pythonInfoResponse.json()) as z.infer<
    typeof GetPythonResponse200Schema
  >;
  return c.json(pythonInfo, 200);
};
