import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = process.env.PORT === undefined ? 3000 : Number(process.env.PORT);
// biome-ignore lint/style/noDefaultExport: <explanation>
export default {
  port,
  fetch: app.fetch,
};
