import { ImageResponse } from "next/og";

export const alt =
  "Val Kononoff — QA & Quality Engineering Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#F5F2EC",
          color: "#15151A",
          padding: "72px 88px",
          position: "relative",
        }}
      >
        {/* Top mono labels */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "rgba(21,21,26,0.5)",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          QA & Quality Engineering
          <span
            style={{
              width: 40,
              height: 1,
              background: "rgba(21,21,26,0.30)",
              display: "flex",
            }}
          />
          Toronto · Remote
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            color: "#15151A",
            fontSize: 124,
            fontWeight: 400,
            lineHeight: 0.96,
            letterSpacing: "-0.025em",
            marginTop: 64,
            maxWidth: 1024,
          }}
        >
          Accelerate your delivery.
          <span style={{ color: "#7A1F2B", fontStyle: "italic" }}>
            &nbsp;Fix QA
          </span>
        </div>

        {/* Wordmark + accent square */}
        <div
          style={{
            position: "absolute",
            left: 88,
            bottom: 56,
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#15151A",
          }}
        >
          <span
            style={{
              display: "flex",
              width: 18,
              height: 18,
              background: "#7A1F2B",
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 500 }}>Val Kononoff</span>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            right: 88,
            bottom: 56,
            display: "flex",
            color: "rgba(21,21,26,0.5)",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          valkononoff.com
        </div>
      </div>
    ),
    { ...size }
  );
}
