import { useGLTF } from '@react-three/drei';

const MateModel = () => {
  const { scene } = useGLTF('/models/mate.glb');
  return <primitive object={scene} scale={2} />;
};

export default MateModel;
