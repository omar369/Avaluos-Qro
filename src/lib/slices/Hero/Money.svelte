<script lang="ts">
  import { T } from '@threlte/core';
  import { useGltf } from '@threlte/extras';
  import { Float } from '@threlte/extras';
  import gsap from 'gsap';
  import { createTransition } from '@threlte/extras';
  import { elasticOut } from 'svelte/easing';
  import * as THREE from 'three';

  export let rate = 0.5;
  const position: [number, number, number] = [-2, 5, -2];

  const soundFx = new Audio('/sounds/turn.ogg');
  let visible = false;
  

  // Cargar el modelo GLTF desde la ruta correcta
  const gltf = useGltf('/models/money.glb');

  // Verificar si el modelo se cargó correctamente
  $: if ($gltf) {
    console.log('Modelo GLTF cargado:', $gltf);
  }

  // Función de manejo de clics en el objeto 3D
  function handleClick(event: MouseEvent) {
    // Reproducir sonido
    soundFx.play();

    // Animar la rotación del objeto al hacer clic
    if ('object' in event && event.object instanceof THREE.Mesh) {
      gsap.to(event.object.rotation, {
        y: `+=2`,
        // x: `+=1`,
        duration: 1.8,
        ease: 'expo.out',
        yoyo: true
      });
    }
    console.log('click en threeJs obj');
  }

  // Animación de "rebote" al cargar el objeto
  const bounce = createTransition((ref) => {
    return {
      tick(t) {
        if (t > 0) visible = true;
        ref.scale.set(t * 2, t * 2, t * 2);  // Escalar el modelo al doble
      },
      easing: elasticOut,
      duration: gsap.utils.random(800, 1200),
      delay: gsap.utils.random(2000, 2300)
    };
  });
</script>

<!-- Renderizar el modelo 3D con animación de flotación, cristal transparente y eventos interactivos -->
{#if $gltf}
  <Float
    speed={3 * rate}
    rotationSpeed={3 * rate}
    rotationIntensity={3 * rate}
    floatIntensity={3 * rate}
  >
    <!-- Modelo 3D con material de cristal transparente -->
    <T
      is={$gltf.scene}
      interactive
      on:click={handleClick}
      in={bounce}
      visible={visible}
      position={position}
    />
  </Float>
{/if}

