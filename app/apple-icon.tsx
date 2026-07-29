import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0b 0%, #32145f 52%, #9dff5b 100%)",
        borderRadius: 42,
        color: "#ffffff",
        display: "flex",
        fontSize: 72,
        fontWeight: 800,
        height: "100%",
        justifyContent: "center",
        letterSpacing: "-0.03em",
        width: "100%",
      }}
    >
      AH
    </div>,
    size,
  );
}
