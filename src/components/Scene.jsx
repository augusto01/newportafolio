import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MateModel from './MateModel';

const Scene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MateModel />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
