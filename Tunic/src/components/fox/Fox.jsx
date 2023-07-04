import { OrbitControls } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { AdditiveBlending, Box3, Color, DoubleSide, ShaderMaterial, Vector3 } from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import "./Fox.css";

extend({ OBJLoader });

function Model({ modelPath }) {
  const objRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const { scene, camera, gl } = useThree();

  useEffect(() => {
    var mtlLoader = new MTLLoader();
    mtlLoader.load("/src/assets/3DModel/Tunic_Model.mtl", function (materials) {
      materials.preload();
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(modelPath, (obj) => {
        objRef.current = obj;
        const box = new Box3().setFromObject(obj);
        const size = box.getSize(new Vector3());
        const center = box.getCenter(new Vector3());
        obj.position.x += obj.position.x - center.x;
        obj.position.y += obj.position.y - center.y;
        obj.position.z += obj.position.z - center.z;

        // Apply X-ray material to the loaded model
        const xrayMaterial = new ShaderMaterial({
          uniforms: {
            p: { value: 3 },
            glowColor: { value: new Color(0x84ccff) },
          },
          vertexShader: `
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float p;
            uniform vec3 glowColor;
            varying vec3 vNormal;
            void main() {
              vec3 viewDir = normalize(vNormal);
              float intensity = pow(dot(viewDir, vec3(0, 0, 1.0)), p);
              gl_FragColor = vec4(glowColor, intensity);
            }
          `,
          side: DoubleSide,
          blending: AdditiveBlending,
          transparent: true,
          depthWrite: false,
        });

        obj.traverse((child) => {
          if (child.isMesh) {
            child.material = xrayMaterial;
          }
        });

        scene.add(obj);
        setLoaded(true);
      });
    });

    return () => scene.remove(objRef.current);
  }, [modelPath, scene]);

  useFrame(() => {
    if (objRef.current) {
      objRef.current.rotation.y += 0.01; // Adjust the rotation speed here
      camera.lookAt(objRef.current.position);
    }
  });

  return loaded ? (
    <OrbitControls target={objRef.current.position} enableZoom={false} />
  ) : null;
}

export default function Fox() {
  const modelPath = "/src/assets/3DModel/Tunic_Model.obj";

  return (
    <div className="Frame">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.9} position={[10, 10, 10]} />
        <Model modelPath={modelPath} />
      </Canvas>
    </div>
  );
}
