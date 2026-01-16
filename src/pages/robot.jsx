import { RobotText } from '../components/RobotText';
import RobotViewer from '../components/RobotViewer';
import { Container, Typography, Box, Stack } from "@mui/material";
import { CenteredImage } from '../components/CenteredImage';
const Em = ({ children }) => (
  <span
    style={{
      fontWeight: 600,
      color: '#4da3ff', // emphasized keyword color
    }}
  >
    {children}
  </span>
);


export function Robot() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // horizontal center
            alignItems: "center",     // vertical center
            textAlign: "center",      // text inside stack
          }}
        >
          <Stack spacing={4}>
            <Typography variant="h1" component="h1" fontWeight={700}>
              Mars Rover software
            </Typography>

            <Typography variant="h2" color="text.secondary">
              Explore mars, our rover, and my contribution
            </Typography>
            
            <div
              style={{
                display: 'flex',       
                alignItems: 'flex-start',  
                gap: '20px'  ,
                width: '100%',     // important          
              }}
            >
            <RobotViewer style={{ flex: '0' }} />
              
            </div>

            
          </Stack>
        </Box>
      </Container>


      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            pt: 16
          }}
        >
          <Stack spacing={4}>


            <Typography variant="h3">
              About and Achievements
            </Typography>
            <Typography variant="h5" color="text.secondary">
              The Mars Rover Robotics Club at Oregon State University designs and develops autonomous rover systems to compete in international challenges modeled after real-world Martian exploration tasks. The team primarily competes in the Canadian International Rover Challenge (CIRC).
            </Typography>
            <Typography variant="h5" color="text.secondary">
              During my time as Software Lead, the team has secured first place at CIRC each year, demonstrating consistent and significant growth. Most recently, we achieved the highest overall score recorded at the competition since 2022.
            </Typography>

            
            
          
           
              
              <CenteredImage
                  src="/photos/dam_2024.jpg"
                  alt="Weather image"
                  maxWidth={500}
              />
              <CenteredImage
                src="/photos/dam_2025.jpg"
                alt="Weather image"
                maxWidth={500}
              />
            

            <Typography variant="h3">
  Robotic Arm
</Typography>

<Typography variant="h5" color="text.secondary">
  The rover's 6 DoF robotic arm leverages <Em>C++</Em>, <Em>ROS2</Em>, and <Em>MoveIt2</Em> for advanced motion planning,
  allowing for precise <Em>inverse kinematics</Em> and collision-aware trajectory execution.
  Motor control is handled over <Em>CAN</Em> using multiple <Em>ODrive S1</Em> drives, supporting smooth,
  high-torque movements with real-time feedback.
  The arm integrates with onboard sensors and perception pipelines powered by <Em>Intel RealSense</Em> to perform accurate object manipulation,
  while preset poses and dynamic trajectory adjustments enable complex task sequences.
  Optimized image transport and telemetry allow the groundstation to monitor and command the arm efficiently,
  making it capable of precise, semi-autonomous operations in challenging environments.
</Typography>


            <Typography variant="h3">
  Chassis
</Typography>

<Typography variant="h5" color="text.secondary">
  <Em>ROS2</Em> with <Em>Python</Em> orchestrates the rover’s core logic and control systems, managing everything from motion planning to sensor integration.
  Telemetry is transmitted over <Em>RTSP</Em>, while the system commands actuators and peripherals using <Em>CAN</Em>, <Em>SPI</Em>, <Em>I2C</Em>, and <Em>USB</Em>
  communication channels for sensing and control.
  The ROS2 environment, combined with onboard sensors, drivebase encoders, and a <Em>9-axis IMU</Em>, enables robust
  <Em>sensor fusion</Em> and <Em>state estimation</Em>, providing accurate position and orientation data for both autonomous navigation and manual control.
  <Em>RTK GPS</Em> is integrated into this stack to correct drift and improve absolute localization, allowing <Em>NAV2</Em>
  to plan reliable paths and maintain smooth, precise motion.
  Video streaming is handled by a custom <Em>RTSP GStreamer</Em> pipeline leveraging <Em>H.265 hardware encoding</Em>
  for smooth, low-latency, and reliable communications.
  Optimized image transport, telemetry routing, and synchronized sensor streams allow the groundstation to monitor and command the rover efficiently,
  supporting high-level autonomous operations and precise real-time intervention when needed.
</Typography>


            <Typography variant="h3">
  Groundstation
</Typography>

<Typography variant="h5" color="text.secondary">
  Our control computer leverages a custom <Em>RTSP GStreamer</Em> pipeline for video transmission,
  ensuring low-latency, high-stability streaming from multiple rover cameras.
  A <Em>C#</Em> application built in <Em>Unity</Em> provides comprehensive graphical tools for operator situational awareness and control,
  including satellite imaging, live 3D models, arm pose planners, dynamic arm poses, and system health visualization.
  Operators can actively monitor the live status of all camera feeds, clear or restart streams on demand,
  and access <Em>ROS</Em> network health monitoring for real-time insight into system connectivity and topic throughput.
  A split network architecture separates <Em>900 MHz</Em> telemetry and command channels from <Em>2.4 GHz</Em>
  high-bandwidth video and sensor streams, ensuring robust connectivity even under interference or challenging conditions.
  Operators have full control over network parameters, rover status, and subsystem settings, allowing them to dynamically
  adjust communication priorities, diagnose performance issues, and fine-tune control loops in real time.
</Typography>




            

          </Stack>
        </Box>
      </Container>
    </>
    );
  
}
