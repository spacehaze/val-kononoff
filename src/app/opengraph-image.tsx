import { ImageResponse } from "next/og";

export const alt = "Val Kononoff — QA & test automation courses, materials and consultations";
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
          justifyContent: "center",
          alignItems: "center",
          background: "#F3F4F6",
          color: "#1B2A41",
          padding: "72px 88px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, marginBottom: 36 }}>Val Kononoff</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
          Courses, materials & consultations on QA and test automation
        </div>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            background: "#2E7D4F",
            color: "#FFFFFF",
            fontSize: 30,
            padding: "16px 36px",
            borderRadius: 999,
          }}
        >
          valkononoff.com
        </div>
      </div>
    ),
    { ...size }
  );
}
