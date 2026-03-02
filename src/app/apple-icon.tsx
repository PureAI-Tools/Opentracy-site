import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 900,
            color: "#f59e0b",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          L
        </div>
      </div>
    ),
    { ...size }
  );
}
