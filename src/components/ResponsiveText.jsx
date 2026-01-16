import { Typography } from "@mui/material";

/**
 * ResponsiveText
 *
 * Props:
 * - variant: MUI typography variant (h1, h2, h3, body1, etc.)
 * - color: text color
 * - weight: fontWeight
 * - children: text content
 */
export function ResponsiveText({
  variant = "body1",
  color = "text.primary",
  weight,
  children,
}) {
  const sizeMap = {
    h1: { xs: "2.2rem", sm: "3rem", md: "4rem" },
    h2: { xs: "1.6rem", sm: "2.2rem", md: "3rem" },
    h3: { xs: "1.3rem", sm: "1.8rem", md: "2.3rem" },
    h4: { xs: "1.2rem", sm: "1.5rem", md: "1.9rem" },
    body1: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
    body2: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
  };

  return (
    <Typography
      variant={variant}
      color={color}
      fontWeight={weight}
      sx={{
        fontSize: sizeMap[variant] || sizeMap.body1,
        lineHeight: variant.startsWith("h") ? 1.25 : 1.7,
      }}
    >
      {children}
    </Typography>
  );
}
