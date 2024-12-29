import { OpenAPIHono } from "@hono/zod-openapi";
import {
  endoflifeAngularHandler,
  endoflifeAngularRoute,
} from "@pages/endoflife/angular";

const appEndoflife = new OpenAPIHono();

appEndoflife.openapi(endoflifeAngularRoute, endoflifeAngularHandler);

export { appEndoflife };
