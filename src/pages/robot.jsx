import { RobotText } from '../components/RobotText';
import RobotViewer from '../components/RobotViewer';
import { Container, Box, Stack } from "@mui/material";
import { CenteredImage } from '../components/CenteredImage';
import { ResponsiveText } from '../components/ResponsiveText';

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
            <ResponsiveText variant="h1" component="h1" fontWeight={700}>
              Mars Rover software
            </ResponsiveText>

            <ResponsiveText variant="h2" color="text.secondary">
              Lead Software, Integration engineer
            </ResponsiveText>
            
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
            <ResponsiveText variant="h3">
  About and Achievements
</ResponsiveText>

      <ResponsiveText variant="h5" color="text.secondary">
        As Software Lead for the Mars Rover Robotics Club at Oregon State University, I led design and development work for our autonomous and operator controlled rover systems, 
        competing in international challenges modeled after real-world Martian exploration tasks.
      </ResponsiveText>

      <ResponsiveText variant="h5" color="text.secondary">
        Our team primarily competes in the Canadian International Rover Challenge (CIRC). As Software Lead, 
        led my team to secure first place at CIRC each year, demonstrating consistent and significant growth. 
        Most recently, we achieved the highest overall score recorded at the competition since 2022.

      </ResponsiveText>

            
            
          
           
              
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
            

            <ResponsiveText variant="h3">
  Robotic Arm
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  I led a rotating team of 3 software engineers for the rover’s <Em>6 DoF robotic arm</Em> using <Em>C++</Em>, <Em>ROS2</Em>,
  and <Em>MoveIt2</Em> to enable advanced motion planning and precise manipulation.
  I optimized our <Em>inverse kinematics</Em> and <Em>collision-aware trajectory execution</Em>,
  allowing the arm to operate safely and reliably in constrained environments.
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  I implemented preset poses and dynamic trajectory adjustments to support complex task sequences, along with
  user-configurable custom positions that operators can safely return to at any time. This is combined with an extensive
  front-end preview of where the arm is and where operators are planning on moving it in real time to create highly informed
  operators
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  These user focused software enhancements increased efficiency exponentially, completing arm related tasks <Em>4 times faster than the 2nd fastest team</Em>
</ResponsiveText>



            <ResponsiveText variant="h3">
  Chassis
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  My senior year, managed the integration of <Em>4 seperate software teams </Em> additions to the Rovers code, requring optimizations and rewrites of much existing code to provide necessary compute
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  I architected the rover’s core control system using <Em>ROS2</Em> with <Em>Python and C++</Em>,
  coordinating motion control, sensor integration, and autonomous behavior execution.
  I implemented communication pipelines across <Em>CAN</Em>, <Em>SPI</Em>, <Em>I2C</Em>, and <Em>USB </Em>
   to reliably interface with onboard sensors and actuators.
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  Using drivebase encoders, a <Em>9-axis IMU</Em>, and additional onboard sensors,
  I implemented <Em>sensor fusion</Em> and <Em>state estimation</Em> to provide accurate position and orientation data.
  I integrated <Em>RTK GPS</Em> into the localization stack to correct drift and improve absolute positioning, giving us <Em>Centimeter global accuracy </Em>
  enabling <Em>NAV2</Em> to plan reliable paths and maintain smooth, precise motion.
</ResponsiveText>









            <ResponsiveText variant="h3">
  Groundstation
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  Ran dozens of user case studies with control schemes, displayed information, and remote issue fixing to determine optimal
  configuration for our operators.
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  Designed and integrated the rover’s <Em>groundstation architecture</Em>,
  focusing on low-latency communication, system reliability, and operator situational awareness.
  This includes a custom <Em>RTSP GStreamer</Em> pipeline to support simultaneous streaming
  from multiple rover cameras with minimal delay, live status and health monitoring, and mission planning.
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  Co-developed and extended a <Em>C#</Em> application built in <Em>Unity </Em>
   that provides comprehensive graphical tools for rover control and monitoring.
  This includes satellite imagery overlays, live <Em>3D rover and arm models</Em>,
  arm pose planners, dynamic pose execution, and real-time system health visualization.
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  Worked on a split-network architecture that separates <Em>900 MHz</Em> telemetry and command channels
  from <Em>2.4 GHz</Em> high-bandwidth video and sensor streams.
  This allows operators to dynamically adjust communication priorities,
  diagnose performance issues, and fine-tune control loops in real time under challenging conditions.
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  To avoid interference in the 2.4GhZ band, I acquired my <Em>ARRL Technician Liscense </Em> to run a <Em>AREDN</Em> network on our radios,
  significantly reducing interference and increasing transmit power
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  I developed a custom <Em>RTSP GStreamer</Em> video pipeline leveraging <Em>H.265 hardware encoding </Em>
  to achieve low-latency, high-stability video streaming.
  I optimized image transport, telemetry routing, and synchronized sensor streams so the groundstation could
  monitor and command the rover effectively during both autonomous operation and manual control.
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  Due to my robust communication overhaul, I <Em>Reduced video bandwidth by 70%</Em> and <Em>Increased responsiveness by 50%</Em>, 
   leading to our robot being the <Em>only robot to complete comms task</Em>, which required navigation to non line of sight (NLOS) markers up to 1km away
</ResponsiveText>


<ResponsiveText variant="h3">
  Miscellaneous tooling I developed
</ResponsiveText>

<ResponsiveText variant="h5" color="text.secondary">
  ROS 2 data structure to JSON conversion tool for debugging, logging, and cross-platform communication<br/>

</ResponsiveText>
<ResponsiveText variant="h5" color="text.secondary">
    SocketCAN network analyzer for monitoring CAN traffic, diagnosing errors, and evaluating bus load<br/>

</ResponsiveText>
<ResponsiveText variant="h5" color="text.secondary">
    IMU and magnetometer noise characterization tool to determine optimal sensor placement on the rover<br/>

</ResponsiveText>
<ResponsiveText variant="h5" color="text.secondary">
    Old 1st place winning React based groundstation was created in 14 weeks with no previous web-dev or js experience<br/>

</ResponsiveText>
<ResponsiveText variant="h5" color="text.secondary">
    LiDAR altitude map analysis for autonomous basemap and comms verification testing<br/>

</ResponsiveText>
<ResponsiveText variant="h5" color="text.secondary">
  Custom RC controller interface for safe and easy rover teleoperation

</ResponsiveText>






            

          </Stack>
        </Box>
      </Container>
    </>
    );
  
}
