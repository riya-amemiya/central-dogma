import type { endoflifeAwsLambdaRoute } from "./route";
import type { GetAwsLambdaResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAwsLambdaHandler: RouteHandler<
  typeof endoflifeAwsLambdaRoute
> = async (c) => {
  const awsLambdaInfoResponse = await fetch(
    "https://endoflife.date/api/aws-lambda.json",
  );
  const awsLambdaInfo = (await awsLambdaInfoResponse.json()) as z.infer<
    typeof GetAwsLambdaResponse200Schema
  >;
  return c.json(awsLambdaInfo, 200);
};
