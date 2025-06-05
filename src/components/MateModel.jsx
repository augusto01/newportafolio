import { useGLTF } from '@react-three/drei';

const MateModel = () => {
  const { scene } = useGLTF('/models/mate.glb');
  return <primitive object={scene} scale={0.7} />
;
};

export default MateModel;
