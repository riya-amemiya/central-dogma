import { OpenAPIHono } from "@hono/zod-openapi";

import { uuidV7Handler, uuidV7Route } from "./uuid-v7";

const appPages = new OpenAPIHono();

appPages.openapi(uuidV7Route, uuidV7Handler);

export { appPages };
