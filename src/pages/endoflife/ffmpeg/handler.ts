import type { endoflifeFfmpegRoute } from "./route";
import type { GetFfmpegResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeFfmpegHandler: RouteHandler<
  typeof endoflifeFfmpegRoute
> = async (c) => {
  const ffmpegInfoResponse = await fetch(
    "https://endoflife.date/api/ffmpeg.json",
  );
  const ffmpegInfo = (await ffmpegInfoResponse.json()) as z.infer<
    typeof GetFfmpegResponse200Schema
  >;
  return c.json(ffmpegInfo, 200);
};
