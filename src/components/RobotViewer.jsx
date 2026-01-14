import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { MarsTerrain } from "./MarsTerrain";
import { MarsSky } from "./MarsSky";
import { RobotText } from "./RobotText";

// Component to load a GLB model safely
function GLBModel({ url, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, onHover, onClick }) {
  const { scene } = useGLTF(url);

  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={onHover}
      onPointerOut={onHover}
      onClick={onClick}
    />
  );
}

// Arm presets
const ARM_POSES = {
  PICKUP: [0.0, -0.698, -1.658, 0.0, -0.785, 0.0],
  ARM_BOARD: [0.0, -0.34, -1.989, 0.0, 0.785, 0.0],
  STRAIGHT: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  STOWED: [0.1745, 1.2217, -2.618, 0.0, -0.1745, 0.0],
};

// Main RobotViewer component
export default function RobotViewer() {
  const [hovered, setHovered] = useState(false);
  const [info, setInfo] = useState("DEFAULT");
  const [pose, setPose] = useState(ARM_POSES.STRAIGHT);
  const [rotation, setRotation] = useState(0);
  const poseRef = useRef(pose);

  useEffect(() => {
    poseRef.current = pose;
  }, [pose]);

  // Smooth arm movement
  const moveArmSmooth = (startPose, goalPose, steps = 100) => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(interval);
        setPose([...goalPose]);
        return;
      }

      const t = currentStep / steps;
      const ease = 3 * t * t - 2 * t * t * t;
      const newPose = startPose.map((startVal, i) => startVal + (goalPose[i] - startVal) * ease);
      setPose(newPose);
      currentStep++;
    }, 16);
  };

  // Random arm poses
  const randomPose = () => {
    const keys = Object.keys(ARM_POSES);
    let key;
    do {
      key = keys[Math.floor(Math.random() * keys.length)];
    } while (pose[1] === ARM_POSES[key][1]);

    moveArmSmooth(poseRef.current, ARM_POSES[key], 250);
  };

  // Visibility-aware intervals
  useEffect(() => {
    let intervalPose;
    let intervalSky;

    const start = () => {
      if (!intervalPose) {
        intervalPose = setInterval(randomPose, 6000);
        intervalSky = setInterval(() => setRotation((r) => r + 0.0001), 16);
      }
    };

    const stop = () => {
      clearInterval(intervalPose);
      clearInterval(intervalSky);
      intervalPose = null;
    };

    const handleVisibilityChange = () => {
      document.hidden ? stop() : start();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    if (!document.hidden) start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <Canvas
        style={{ width: "60%", height: "60vh", background: "#f0f0f0" }}
        camera={{ position: [0, 2, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Rover main model */}
        <GLBModel
          url={process.env.PUBLIC_URL + "/glb_files/_mr2223-rover_main.glb"}
          hovered={hovered}
          onHover={() => setHovered(!hovered)}
          onClick={() => setInfo("CHASSIS")}
          scale={0.001}
          position={[0.58, 0.2, -0.16]}
          rotation={[0, 3.14159, 0]}
        />

        {/* Robotic Arm */}
        <RobotArm pose={pose} setInfo={setInfo} />

        {/* Terrain and sky */}
        <MarsTerrain textureUrl={process.env.PUBLIC_URL + "/photos/ngs.jpg"} />
        <MarsSky textureUrl={process.env.PUBLIC_URL + "/photos/mars_sky.jpg"} rotation={rotation} />

        <OrbitControls />
      </Canvas>

      {/* Info panel */}
      <RobotText style={{ flex: 1 }} selected_part={info} />
    </>
  );
}

// Robotic arm component
function RobotArm({ pose, setInfo }) {
  const baseUrl = process.env.PUBLIC_URL + "/glb_files/";

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <GLBModel url={baseUrl + "base_link.glb"} scale={1} onClick={() => setInfo("ARM")} />
      <group position={[0, 0.06, -0.05]} rotation={[0, pose[0], 0]}>
        <GLBModel url={baseUrl + "arm_link_0.glb"} scale={1} onClick={() => setInfo("ARM")} />
        <group position={[0, 0.15, 0]} rotation={[pose[1], 0, 0]}>
          <GLBModel url={baseUrl + "arm_link_1.glb"} scale={1} onClick={() => setInfo("ARM")} />
          <group position={[0.116, 0.5, 0]} rotation={[pose[2], 0, 0]}>
            <GLBModel url={baseUrl + "arm_link_2.glb"} scale={1} onClick={() => setInfo("ARM")} />
            <group position={[0, 0, 0]} rotation={[pose[3], 0, 0]}>
              <GLBModel url={baseUrl + "arm_link_3.glb"} scale={1} onClick={() => setInfo("ARM")} />
              <group position={[-0.06, 0.345, 0]} rotation={[pose[4], 1.5708, 0]}>
                <GLBModel url={baseUrl + "arm_link_4.glb"} scale={1} onClick={() => setInfo("ARM")} />
                <group position={[0.02, 0.18, -0.09]} rotation={[0, pose[5] - 1.5708, 0]}>
                  <GLBModel url={baseUrl + "arm_gripper.glb"} scale={1} onClick={() => setInfo("ARM")} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
