import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#15171c",
          color: "#f6f3ee",
          fontSize: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        ZA
        <div style={{ display: "flex", width: 90, height: 8, borderRadius: 4, background: "#c74634", marginTop: 6 }} />
      </div>
    ),
    size
  );
}
