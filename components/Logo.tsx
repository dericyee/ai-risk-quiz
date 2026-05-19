import Image from "next/image";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const heights = { sm: 18, md: 24, lg: 32 };
  const h = heights[size];
  // Logo is 1884x266 — keep the aspect ratio
  const w = Math.round((h * 1884) / 266);

  return (
    <Image
      src="/brand/sigma-logo.png"
      alt="Sigmaschool"
      width={w}
      height={h}
      priority
      className="h-auto"
      style={{ height: h, width: "auto" }}
    />
  );
}
