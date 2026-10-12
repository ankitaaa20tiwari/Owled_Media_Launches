import { ImageResponse } from "next/og";
import { MARK_PATH, MARK_VIEWBOX } from "@/components/wordmark";
import { launchDateLong, launchTime } from "@/lib/launch";

export const alt = "Confido Health launch day: We're putting the care back in healthcare.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f8f6f1",
          color: "#2d2c2b",
          borderTop: "12px solid #ffa500",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, letterSpacing: -0.5 }}>
          <svg width="31" height="34" viewBox={MARK_VIEWBOX} fill="#2d2c2b" style={{ marginRight: 14 }}>
            <path d={MARK_PATH} />
          </svg>
          <span style={{ fontWeight: 700 }}>Confido</span>
          <span>Health</span>
          <span style={{ fontSize: 11, marginLeft: 4, marginTop: 18 }}>TM</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#4d4d4c" }}>LAUNCH DAY</div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 76, lineHeight: 1.05, letterSpacing: -2, fontWeight: 600 }}>
            We&rsquo;re putting the care back in healthcare.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#4d4d4c" }}>Launching {launchDateLong} · {launchTime}</div>
      </div>
    ),
    size,
  );
}
