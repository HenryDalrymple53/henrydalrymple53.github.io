import { Container, Typography, Box, Stack } from "@mui/material";

const Em = ({ children }) => (
  <span
    style={{
      fontWeight: 600,
      color: "#4da3ff",
    }}
  >
    {children}
  </span>
);

export function Work() {
  return (
    <>
      {/* Hero Section */}
      <Container maxWidth="xl">
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Stack spacing={4}>
            <Typography variant="h1" fontWeight={700}>
              Low Budget Autonomous Nighttime Imaging Systems
            </Typography>

            <Typography variant="h2" color="text.secondary">
              Long-term, low-power and cheap research platforms for seasonal monitoring
            </Typography>
          </Stack>
        </Box>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Box sx={{ minHeight: "80vh", pt: 16 }}>
          <Stack spacing={4}>
            {/* Overview */}
            <Typography variant="h3">
              Overview
            </Typography>

            <Typography variant="h5" color="text.secondary">
              My work focuses on the design and deployment of <Em>autonomous imaging platforms</Em> for
              <Em> long-term environmental and ecological research</Em>. These systems are optimized
              for <Em>nighttime operation</Em>, leveraging <Em>infrared cameras</Em> and
              <Em> controlled IR illumination</Em> to capture high-quality imagery without disturbing
              wildlife or the surrounding environment.
            </Typography>

            <Typography variant="h5" color="text.secondary">
              I was responsible for the <Em>end-to-end system design</Em>, including
              <Em> mechanical structure</Em>, <Em>custom electronics</Em>,
              <Em> firmware development</Em>, and <Em>higher-level software</Em>.
              The resulting platforms are capable of operating <Em>continuously for months</Em>
              in remote outdoor environments with minimal maintenance.
            </Typography>

            {/* System Architecture */}
            <Typography variant="h3">
              System Architecture
            </Typography>


            <Typography variant="h5" color="text.secondary">
              The platform integrates <Em>environmental sensing</Em>,
              <Em> scheduled image acquisition</Em>, and <Em>health monitoring</Em>,
              allowing researchers to collect consistent datasets across
              <Em> seasonal timescales</Em> while minimizing manual intervention.
            </Typography>

            <Typography variant="h3">
              Imaging and Optics
            </Typography>

            <Typography variant="h5" color="text.secondary">
              Imaging is performed using <Em>infrared-sensitive cameras</Em> paired with
              <Em> custom IR illumination</Em>, enabling reliable data capture in
              <Em>complete darkness</Em>. Careful control of illumination timing and intensity
              ensures <Em>consistent exposure</Em> while minimizing power consumption.
            </Typography>

            <Typography variant="h5" color="text.secondary">
              The imaging pipeline supports <Em>precise scheduling</Em>,
              <Em> configurable capture parameters</Em>, and
              <Em> automated data validation</Em>, ensuring that collected imagery
              remains usable across long deployments and changing environmental conditions.
            </Typography>

            <Typography variant="h3">
              Electronics and Power Systems
            </Typography>

            <Typography variant="h5" color="text.secondary">
              I designed the <Em>electrical architecture</Em> with a strong emphasis on
              <Em>energy efficiency</Em> and <Em>robustness</Em>.
              Power systems are optimized for <Em>long-duration operation</Em>,
              supporting extended deployments using LifePo4 batteries.
            </Typography>


            <Typography variant="h3">
              Firmware and Data Pipeline
            </Typography>

            <Typography variant="h5" color="text.secondary">
              Custom <Em>embedded firmware</Em> coordinates sensor acquisition,
              power state transitions, and data logging. Weather station modules communicate with imaging modules
              to spread out points of failure, and allow for cheaper per unit costs.
            </Typography>

            <Typography variant="h5" color="text.secondary">
              Higher-level software handles <Em>data organization</Em>,
              <Em>metadata tagging</Em>, and <Em>post-processing workflows</Em>,
              enabling efficient analysis of large image datasets collected
              over <Em>weeks or months</Em>.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
