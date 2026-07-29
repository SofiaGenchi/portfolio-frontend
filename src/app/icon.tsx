import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  const fontData = readFileSync(join(process.cwd(), "src/app/Plaster-Regular.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#111111", // primary color from ED-L2 theme
          fontSize: 24,
          fontFamily: "Plaster",
        }}
      >
        SG
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Plaster",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
