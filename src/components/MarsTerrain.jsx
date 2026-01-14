import { useMemo } from 'react'
import * as THREE from 'three'
import { createNoise2D } from 'simplex-noise'
import { TextureLoader} from 'three';
import { useLoader } from '@react-three/fiber';


export function MarsTerrain({ flatRadius = 5 ,textureUrl}) {
  const texture = useLoader(TextureLoader, textureUrl)
  
  const geometry = useMemo(() => {
    const geo =  new THREE.SphereGeometry( 30, 64, 64 );
    const noise2D = createNoise2D()

    

    geo.computeVertexNormals()
    return geo
  }, [flatRadius])

  return (
    <mesh
      geometry={geometry}
      rotation={[-Math.PI / 2, -2, 0]}
      position={[0,-30.25,0]}
      receiveShadow
    >
      <meshStandardMaterial
        map={texture}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}
