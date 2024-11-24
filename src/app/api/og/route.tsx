import {ImageResponse} from "@vercel/og";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    return new ImageResponse(
      (
        <div
          tw="relative flex px-14 py-12 items-end w-full h-full bg-block-canvas text-7xl font-semibold text-black"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #bfdbfe, #fef2f2)",
          }}>
          NextJS Template
        </div>
      ),
      {
        width: 1200,
        height: 800,
      }
    );
  } catch (err) {
    return new Response(`Failed to generate image`, {status: 500});
  }
}
