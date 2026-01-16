import { Box } from "@mui/material";

export function CenteredImage({
  src,
  alt = "",
  maxWidth = 400,
  borderRadius = 2,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          maxWidth,
          height: "auto",
          borderRadius,
        }}
      />
    </Box>
  );
}
