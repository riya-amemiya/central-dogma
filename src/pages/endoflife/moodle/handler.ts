import type { endoflifeMoodleRoute } from "./route";
import type { GetMoodleResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMoodleHandler: RouteHandler<
  typeof endoflifeMoodleRoute
> = async (c) => {
  const moodleInfoResponse = await fetch(
    "https://endoflife.date/api/moodle.json",
  );
  const moodleInfo = (await moodleInfoResponse.json()) as z.infer<
    typeof GetMoodleResponse200Schema
  >;
  return c.json(moodleInfo, 200);
};
