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
          background: "#F5F2EC",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            background: "#7A1F2B",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
