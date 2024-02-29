// ThreeDObject.jsx
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const ThreeDObject = ({ productName, ...props }) => {
  const loadModel = (productName) => {
    switch (productName.toLowerCase()) {
      case "tuf gaming vg27aq1a":
        return "./models/asus_monitor.glb";
      case "polaris mm800":
        return "./models/corsair_mousepad.glb";
      case "quadcast s rgb":
        return "./models/hyperx_quadcast.glb";
      case "jabra elite 5":
        return "./models/jabra_elite_buds.glb";
      case "g413 se mechanical":
        return "./models/logitech_G413.glb";
      case "mx master 2s":
        return "./models/logitech_mx.glb";
      case "nari ultimate wireless":
        return "./models/razer_nari.glb";
      case "elite series 2":
        return "./models/xbox_controller.glb";
      default:
        return "./models/xbox_controller.glb";
    }
  };

  const modelPath = loadModel(productName);
  const { scene } = useGLTF(modelPath);
  const boxRef = useRef();

  // Ajusta la posición y rotación iniciales

  if (boxRef.current) {
    boxRef.current.position.set(0, 0, 0);
    boxRef.current.rotation.set(0, 0, 0);
  }

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.side = THREE.DoubleSide;
    }
  });

  return <primitive object={scene} ref={boxRef} {...props} />;
};

export default ThreeDObject;
