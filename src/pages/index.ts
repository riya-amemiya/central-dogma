import { OpenAPIHono } from "@hono/zod-openapi";

import { appEndoflife } from "./endoflife";
import { appMath } from "./math";

const appPages = new OpenAPIHono();

appPages.route("/endoflife", appEndoflife);
appPages.route("/math", appMath);

export { appPages };
