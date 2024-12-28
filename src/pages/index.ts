import { OpenAPIHono } from "@hono/zod-openapi";

import { uuidV7Handler, uuidV7Route } from "./uuid-v7";
import { uuidsV7Handler, uuidsV7Route } from "./uuids-v7";

const appPages = new OpenAPIHono();

appPages.openapi(uuidV7Route, uuidV7Handler);
appPages.openapi(uuidsV7Route, uuidsV7Handler);

export { appPages };
