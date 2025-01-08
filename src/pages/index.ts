import { OpenAPIHono } from "@hono/zod-openapi";
import { convertTimeHandler, convertTimeRoute } from "@pages/convertTime";
import { appEndoflife } from "@pages/endoflife";
import { uuidV7Handler, uuidV7Route } from "@pages/uuid-v7";
import { uuidsV7Handler, uuidsV7Route } from "@pages/uuids-v7";

const appPages = new OpenAPIHono();

appPages.openapi(convertTimeRoute, convertTimeHandler);
appPages.openapi(uuidV7Route, uuidV7Handler);
appPages.openapi(uuidsV7Route, uuidsV7Handler);
appPages.route("/endoflife", appEndoflife);

export { appPages };
