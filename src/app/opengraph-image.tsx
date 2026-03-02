import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Lunar — Cut LLM Costs by 57% with Small Models";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 80px",
          fontFamily: "monospace",
        }}
      >
        {/* Border frame */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: "1px solid #333333",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 120,
            height: 3,
            background: "#f59e0b",
            display: "flex",
          }}
        />

        {/* Logo / Brand */}
        <div
          style={{
            fontSize: 24,
            color: "#f59e0b",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 32,
            display: "flex",
          }}
        >
          LUNAR
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            maxWidth: 900,
            display: "flex",
          }}
        >
          Cut LLM costs by 57% with small models.
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: 22,
            color: "#888888",
            textAlign: "center",
            marginTop: 24,
            maxWidth: 700,
            display: "flex",
          }}
        >
          Distill, evaluate, and deploy SLMs from production traces.
        </div>

        {/* Bottom stats */}
        <div
          style={{
            display: "flex",
            gap: 60,
            marginTop: 48,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#f59e0b", display: "flex" }}>
              57%
            </div>
            <div style={{ fontSize: 13, color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", display: "flex" }}>
              cost reduction
            </div>
          </div>
          <div style={{ width: 1, height: 40, background: "#333333", display: "flex" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#ffffff", display: "flex" }}>
              {"<100ms"}
            </div>
            <div style={{ fontSize: 13, color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", display: "flex" }}>
              latency
            </div>
          </div>
          <div style={{ width: 1, height: 40, background: "#333333", display: "flex" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#ffffff", display: "flex" }}>
              12+
            </div>
            <div style={{ fontSize: 13, color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", display: "flex" }}>
              providers
            </div>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 14,
            color: "#555555",
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          lunar-sys.com
        </div>
      </div>
    ),
    { ...size }
  );
}
