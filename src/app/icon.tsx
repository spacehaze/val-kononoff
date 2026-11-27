import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B2A41",
          borderRadius: 14,
          color: "#FFFFFF",
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        VK
      </div>
    ),
    { ...size }
  );
}
