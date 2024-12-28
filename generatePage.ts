import fs from "node:fs/promises";
import path from "node:path";

const routePath = process.argv[2];
const method = (process.argv[3] || "get").toLowerCase();

if (!routePath) {
  console.error("パスを指定してください (例: uuid-v7)");
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

if (!["get", "post"].includes(method)) {
  console.error("メソッドはget/postのみ対応しています");
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

const functionName = routePath.replaceAll(/-./g, (x) => x[1].toUpperCase());
const capitalizedName = functionName[0].toUpperCase() + functionName.slice(1);
const capitalizedMethod = method[0].toUpperCase() + method.slice(1);

// スキーマファイルの内容を動的に生成
const getSchemaContent = () => {
  const baseSchema = `
export const ${capitalizedMethod}${capitalizedName}Response200Schema = z.object({
  message: z.string(),
});`;

  return method === "post"
    ? `import { z } from "@hono/zod-openapi";

export const ${capitalizedMethod}${capitalizedName}RequestSchema = z.object({
  data: z.string(),
});
${baseSchema}`
    : `import { z } from "@hono/zod-openapi";
${baseSchema}`;
};

// ルートファイルの内容を動的に生成
const getRouteContent = () => `import { createRoute } from "@hono/zod-openapi";

${
  method === "post"
    ? `import { ${capitalizedMethod}${capitalizedName}RequestSchema,`
    : // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
      `import {`
} ${capitalizedMethod}${capitalizedName}Response200Schema } from "./schema.js";

export const ${functionName}Route = createRoute({
  method: "${method}",
  path: "/${routePath}",${
    method === "post"
      ? `
  request: {
    body: {
      content: {
        "application/json": {
          schema: ${capitalizedMethod}${capitalizedName}RequestSchema,
        },
      },
    },
  },`
      : ""
  }
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ${capitalizedMethod}${capitalizedName}Response200Schema,
        },
      },
      description: "${capitalizedMethod} a ${capitalizedName}",
    },
  },
});`;

const files = {
  "handler.ts": `import type { ${functionName}Route } from "./route";
import type { RouteHandler } from "@hono/zod-openapi";

export const ${functionName}Handler: RouteHandler<typeof ${functionName}Route> = async (c) => {
  return c.json(
    {
      message: "",
    },
    200,
  );
};`,
  "index.ts": `export * from "./handler";
export * from "./route";
export * from "./schema";`,
  "route.ts": getRouteContent(),
  "schema.ts": getSchemaContent(),
};

await fs.mkdir(path.join("./src/pages", routePath), { recursive: true });

for (const [filename, content] of Object.entries(files)) {
  const filePath = path.join("./src/pages", routePath, filename);
  await fs.writeFile(filePath, content);
  console.log(`Generated: ${filePath}`);
}
