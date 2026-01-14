
import { useLoader } from '@react-three/fiber';
import { TextureLoader, BackSide } from 'three';

export function MarsSky({ textureUrl, rotation}) {
  // Load the texture
  const texture = useLoader(TextureLoader, textureUrl)

  return (
    <mesh rotation={[0,rotation,0]}>
      
      {/* Inverted sphere */}
      <sphereGeometry args={[800, 64, 64]} />
      <meshBasicMaterial
        map={texture}
        side={BackSide} // show inside of the sphere
        
      />
    </mesh>
  )
}
