import { ImageResponse } from "next/og";
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
          background: "#ffffff",
          color: "#0e1630",
          borderTop: "12px solid #3267ff",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 5, fontWeight: 600 }}>
          CONFIDO&nbsp;<span style={{ color: "#3267ff" }}>HEALTH</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#3267ff" }}>LAUNCH DAY</div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 76, lineHeight: 1.05, letterSpacing: -2, fontWeight: 600 }}>
            We&rsquo;re putting the care back in healthcare.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#5a6276" }}>Launching {launchDateLong} · {launchTime}</div>
      </div>
    ),
    size,
  );
}
