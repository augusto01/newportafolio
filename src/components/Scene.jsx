import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MateModel from './MateModel';

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        <MateModel />
        <OrbitControls enableZoom={false} />
    </Canvas>

  );
};

export default Scene;
