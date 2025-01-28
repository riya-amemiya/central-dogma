import { OpenAPIHono } from "@hono/zod-openapi";

import { randomHandler, randomRoute } from "./random";
import { uuidV7Handler, uuidV7Route } from "./uuid-v7";
import { uuidsV7Handler, uuidsV7Route } from "./uuids-v7";

const appMath = new OpenAPIHono();

appMath.openapi(randomRoute, randomHandler);
appMath.openapi(uuidV7Route, uuidV7Handler);
appMath.openapi(uuidsV7Route, uuidsV7Handler);

export { appMath };
