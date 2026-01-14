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


const TEXT_VALUE = {
  ARM: (
    <>
      Using <Em>6 ODrive S1s</Em> negotiated over <Em>CAN</Em>, we command a{" "}
      <Em>ROS2 MOVEIT2 C++</Em> package to leverage advanced control schemes for
      maximum efficiency and operator transparency. <Em>INVERSE KINEMATICS</Em>,{" "}
      <Em>PRESET POSES</Em>, and <Em>COLLISION AVOIDANCE</Em> allow us to have
      lethal efficiency and safety. Read more below.
    </>
  ),

  CHASSIS: (
    <>
      <Em>ROS2 Python</Em> dictates much of the logic and control on the rover.
      From managing telemetry over <Em>RTSP</Em> sockets, to commanding{" "}
      <Em>CAN</Em>, <Em>SPI</Em>, <Em>I2C</Em>, and <Em>USB</Em> communication
      channels for sensing and control. We use this <Em>ROS2 environment</Em> and
      onboard sensors and <Em>RTK GPS</Em> to leverage <Em>NAV2</Em> into an
      autonomous stack. However, video streaming is handled by a custom{" "}
      <Em>RTSP GSTREAMER</Em> pipeline, leveraging{" "}
      <Em>H265 HARDWARE ENCODING</Em> for smooth and reliable communications. Find
      more below.
    </>
  ),

  GROUNDSTATION: (
    <>
      Our <Em>Groundstation</Em> leverages a <Em>CUSTOM RTSP GSTREAMER</Em>{" "}
      pipeline for video transmittance, allowing for low latency and stability. A{" "}
      <Em>C# UNITY</Em> application gives us comprehensive graphical tools for
      better operator situational awareness and control, such as{" "}
      <Em>SATELLITE IMAGING</Em>, <Em>LIVE 3D MODELS</Em>,{" "}
      <Em>ARM POSE PLANNERS</Em>, <Em>DYNAMIC ARM POSES</Em>, and{" "}
      <Em>SYSTEM HEALTH</Em>. Read more below
    </>
  ),

  DEFAULT: (
    <>
      Click on the Rover <Em>arm</Em> or <Em>body</Em> to get a summary
    </>
  ),
};



export function RobotText({ selected_part, style }) {
  return (
    <h2
      style={{
        color: '#b0b0b0', // base text color (light grey)
        ...style,
      }}
    >
      {TEXT_VALUE[selected_part] || TEXT_VALUE.CHASSIS}
    </h2>
  );
}
