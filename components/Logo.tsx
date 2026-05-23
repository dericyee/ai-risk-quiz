import Image from "next/image";

interface Props {
  size?: "sm" | "md" | "lg";
  /** Where the logo links to. Pass `null` to render without a link wrapper. */
  href?: string | null;
}

export default function Logo({ size = "md", href = "https://sigmaschool.co" }: Props) {
  const heights = { sm: 18, md: 24, lg: 32 };
  const h = heights[size];
  // Logo is 1884x266 — keep the aspect ratio
  const w = Math.round((h * 1884) / 266);

  const img = (
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

  if (!href) return img;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit sigmaschool.co"
      className="inline-flex items-center transition-opacity hover:opacity-80"
    >
      {img}
    </a>
  );
}
