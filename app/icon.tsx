import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0b 0%, #32145f 55%, #48c6ef 100%)",
        color: "#ffffff",
        display: "flex",
        fontSize: 15,
        fontWeight: 800,
        height: "100%",
        justifyContent: "center",
        letterSpacing: "-0.02em",
        width: "100%",
      }}
    >
      AH
    </div>,
    size,
  );
}
