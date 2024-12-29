import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKubernetesCsiNodeDriverRegistrarResponse200Schema } from "./schema";

export const endoflifeKubernetesCsiNodeDriverRegistrarRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kubernetes-csi-node-driver-registrar",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKubernetesCsiNodeDriverRegistrarResponse200Schema,
        },
      },
      description:
        "Get the KubernetesCsiNodeDriverRegistrar end-of-life information",
    },
  },
});
