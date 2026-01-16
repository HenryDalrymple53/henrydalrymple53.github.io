import { Container, Box, Stack } from "@mui/material";
import { CenteredImage } from "../components/CenteredImage";
import { ResponsiveText } from "../components/ResponsiveText";
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
            <ResponsiveText variant="h1" fontWeight={700}>
              OSU Seed ID lab
            </ResponsiveText>

            <ResponsiveText variant="h2" color="text.secondary">
              Sensor engineering, robotics, odd jobs.
            </ResponsiveText>
          </Stack>
        </Box>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Box sx={{ minHeight: "80vh", pt: 16 }}>
          <Stack spacing={4}>
            {/* Overview */}
            <ResponsiveText variant="h3">
              Primary Project: Autonomous Imaging Stations
            </ResponsiveText>

            <ResponsiveText variant="h5" color="text.secondary">
              My primary responsibility at the OSU Seed ID Lab was the design and deployment of dozens of 
              autonomous imaging stations across Oregon for long-term environmental and ecological research.
              These systems are built to operate unattended in outdoor environments for extended
              periods, capturing consistent image datasets across seasonal timescales.
            </ResponsiveText>

            <ResponsiveText variant="h5" color="text.secondary">
              The imaging stations are optimized for nighttime operation using
              <Em> infrared-sensitive cameras</Em> and <Em>controlled IR illumination</Em>,
              enabling high-quality image capture in complete darkness without disturbing wildlife.
              I led the end-to-end system development, spanning mechanical design, electronics,
              firmware, and higher-level software.
            </ResponsiveText>

            <ResponsiveText variant="h5" color="text.secondary">
              Collaborated and organized with graduate, PhD, undergrad, and general assitant employees with their projects and needs,
              completing a vast variety of tasks from helping tasks such as building office networks and configuring lab NAS drives
            </ResponsiveText>

            <ResponsiveText variant="h3">
              System Design and Deployment
            </ResponsiveText>

            <ResponsiveText variant="h5" color="text.secondary">
              I was responsible for the complete system architecture, including
              <Em> custom electronics</Em>, <Em>embedded firmware</Em>, and deployment-ready enclosures.
              The platforms are designed for continuous operation over months with minimal
              maintenance, emphasizing reliability, power efficiency, and fault tolerance. Powered
              by ESP32's and connected through a <Em>cellular network</Em>, remote users can be informed of status
              at all times.
            </ResponsiveText>
            <CenteredImage
              src="/photos/work/imaging.jpeg"
              alt="imaging system image"
              maxWidth={500}
            />
            <CenteredImage
              src="/photos/work/weather.jpeg"
              alt="Weather image"
              maxWidth={500}
            />

            <ResponsiveText variant="h5" color="text.secondary">
              Imaging and sensing tasks are scheduled autonomously, with integrated
              health monitoring and data validation to ensure datasets remain usable
              despite changing environmental conditions.
            </ResponsiveText>
            <CenteredImage
              src="/photos/work/ir_photo.png"
              alt="Infrared imaging example"
              maxWidth={500}
            />

            <ResponsiveText variant="h3">
              Firmware and Data Pipeline
            </ResponsiveText>

            <ResponsiveText variant="h5" color="text.secondary">
              Custom <Em>embedded firmware</Em> coordinates sensor acquisition,
              power state transitions, and fault recovery.
              Weather station modules communicate with imaging modules to reduce
              single points of failure and allow scalable, cost-effective deployments.
            </ResponsiveText>

            <ResponsiveText variant="h5" color="text.secondary">
              Higher-level software manages <Em>data organization</Em>,
              <Em>metadata tagging</Em>, and post-processing workflows,
              supporting efficient analysis of large image datasets collected
              over extended periods.
            </ResponsiveText>
                        


            <ResponsiveText variant="h3">
              Additional Projects 
            </ResponsiveText>

            <ResponsiveText variant="h5" color="text.secondary">
              In addition to the imaging stations, I worked on a variety of smaller robotics
              and instrumentation projects that supported ongoing research and field testing.
              These tasks often required rapid prototyping and integration with existing systems.
            </ResponsiveText>

            <ResponsiveText variant="h5" color="text.secondary">
              I developed software to enable mobile robots to navigate using
              <Em>GPS-based waypoint following</Em> and to track and follow people using
              <Em>vision-based detection</Em>.
              These systems combined sensor input, control logic, and real-time feedback
              to support both autonomous and supervised operation.
            </ResponsiveText>

            <ResponsiveText variant="h5" color="text.secondary">
              I also implemented <Em>radio control links</Em> and
              <Em> vision-based remote operation</Em> pipelines,
              allowing robots and instruments to be operated reliably from a distance
              in field environments.
            </ResponsiveText>
            <CenteredImage
              src="/photos/work/odd.jpeg"
              alt="Weather image"
              maxWidth={500}
            />


            <ResponsiveText variant="h5" color="text.secondary">
              Beyond robotics, I designed and built numerous handheld pieces of
               <Em> custom test equipment</Em> using spare parts around the lab for sensor validation, system debugging,
              and deployment diagnostics, improving reliability and reducing turnaround
              time during field work.
            </ResponsiveText>
            <CenteredImage
              src="/photos/work/odd_2.jpeg"
              alt="Weather image"
              maxWidth={500}
            />





          </Stack>
        </Box>
      </Container>
    </>
  );
}
