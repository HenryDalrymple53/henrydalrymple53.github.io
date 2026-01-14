import { RobotText } from '../components/RobotText';
import RobotViewer from '../components/RobotViewer';
import { Container, Typography, Box, Stack } from "@mui/material";

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
            minHeight: "80vh",
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

            
            
          
            <div className="image-container"> 
              <img src={"/photos/dam_2024.jpg"} alt="CIRC 2024 win" className="side-by-side-img" height="350px" width="500px"/>
              <img src={"/photos/dam_2025.jpg"} alt="CIRC 2025 win" className="side-by-side-img" height="350px" width="500px"/>
            </div>

            <Typography variant="h3">
  Robotic Arm
</Typography>

<Typography variant="h5" color="text.secondary">
  The rover's <Em>6 DoF robotic arm</Em> leverages <Em>C++ ROS2</Em> and <Em>MoveIt2</Em> for advanced motion planning, 
  allowing for precise <Em>inverse kinematics</Em> and <Em>collision-aware trajectory execution</Em>. 
  Motor control is handled over <Em>CAN</Em> using multiple <Em>ODrive S1</Em> drives, supporting smooth, 
  high-torque movements with <Em>real-time feedback</Em>. The arm integrates with <Em>onboard sensors</Em> 
  and <Em>perception pipelines</Em> powered by <Em>Intel Realsense</Em> to perform accurate <Em>object manipulation</Em>, 
  while <Em>preset poses</Em> and <Em>dynamic trajectory adjustments</Em> enable complex task sequences. 
  Optimized <Em>image transport</Em> and <Em>telemetry</Em> allow the <Em>groundstation</Em> to monitor and command the arm efficiently, 
  making it capable of precise, <Em>semi-autonomous operations</Em> in challenging environments.
</Typography>

            <Typography variant="h3">
  Chassis
</Typography>

<Typography variant="h5" color="text.secondary">
  <Em>ROS2 Python</Em> orchestrates the rover’s core logic and control systems, managing everything from motion planning to sensor integration. 
  Telemetry is transmitted over <Em>RTSP</Em> sockets, while the system commands actuators and peripherals using <Em>CAN</Em>, <Em>SPI</Em>, <Em>I2C</Em>, and <Em>USB</Em> communication channels for sensing and control. 
  The <Em>ROS2 environment</Em>, combined with <Em>onboard sensors</Em>, <Em>drivebase encoders</Em>, and a <Em>9-axis IMU</Em>, enables robust <Em>sensor fusion</Em> and <Em>state estimation</Em>, providing accurate position and orientation data for both autonomous navigation and manual control. 
  <Em>RTK GPS</Em> is integrated into this stack to correct drift and improve absolute localization, allowing <Em>NAV2</Em> to plan reliable paths and maintain smooth, precise motion. 
  Video streaming is handled by a custom <Em>RTSP GSTREAMER</Em> pipeline leveraging <Em>H265 HARDWARE ENCODING</Em> for smooth, low-latency, and reliable communications. 
  Optimized <Em>image transport</Em>, <Em>telemetry routing</Em>, and synchronized <Em>sensor streams</Em> allow the <Em>groundstation</Em> to monitor and command the rover efficiently, supporting high-level autonomous operations and precise real-time intervention when needed.
</Typography>

            <Typography variant="h3">
  Groundstation
</Typography>

<Typography variant="h5" color="text.secondary">
  Our <Em>Groundstation</Em> leverages a <Em>CUSTOM RTSP GSTREAMER</Em> pipeline for video transmittance, 
  ensuring low-latency, high-stability streaming from multiple rover cameras. A <Em>C# UNITY</Em> application provides 
  comprehensive graphical tools for operator situational awareness and control, including <Em>SATELLITE IMAGING</Em>, 
  <Em>LIVE 3D MODELS</Em>, <Em>ARM POSE PLANNERS</Em>, <Em>DYNAMIC ARM POSES</Em>, and <Em>SYSTEM HEALTH</Em>. 
  Operators can actively monitor the <Em>live status</Em> of all camera feeds, clear or restart streams on demand, 
  and access <Em>ROS network health monitoring</Em> for real-time insight into system connectivity and topic throughput. 
  A split network architecture separates <Em>900 MHz</Em> telemetry and command channels from <Em>2.4 GHz</Em> high-bandwidth 
  video and sensor streams, ensuring robust connectivity even under interference or challenging conditions. 
  Operators have full control over network parameters, rover status, and subsystem settings, allowing them to dynamically 
  adjust communication priorities, diagnose performance issues, and fine-tune control loops in real time. 
  This setup enables rapid debugging and precise operational oversight, keeping the rover fully responsive during testing 
  and competition.
</Typography>



            

          </Stack>
        </Box>
      </Container>
    </>
    );
  
}
