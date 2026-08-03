import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const display = { display: "flex" } as const;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          ...display,
          width: "100%",
          height: "100%",
          background: "#FDF6F4",
          color: "#111111",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            ...display,
            position: "absolute",
            top: 48,
            left: 48,
            border: "3px solid #C27B7B",
            width: 88,
            height: 88,
            alignItems: "center",
            justifyContent: "center",
            color: "#C27B7B",
            fontSize: 44,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          {siteConfig.brand.short}
        </div>

        <div
          style={{
            ...display,
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "45%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: 72,
            gap: 16,
          }}
        >
          <div
            style={{
              width: 96,
              height: 4,
              background: "#C27B7B",
            }}
          />
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.1 }}>
            Sofia Genchi
          </div>
          <div
            style={{
              ...display,
              fontSize: 34,
              color: "#4A4A4A",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            {`${siteConfig.brand.tagline} — diseño y desarrollo de interfaces limpias y accesibles.`}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 48,
            right: 48,
            fontSize: 24,
            color: "#B0A3A0",
            fontStyle: "italic",
          }}
        >
          portfolio
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 48,
            fontSize: 22,
            color: "#B0A3A0",
            fontStyle: "italic",
          }}
        >
          {siteConfig.seo.domain.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
