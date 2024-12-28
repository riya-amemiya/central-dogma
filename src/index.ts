import { serve, type HttpBindings } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono<{ Bindings: HttpBindings }>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = process.env.PORT === undefined ? 3000 : Number(process.env.PORT);
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
