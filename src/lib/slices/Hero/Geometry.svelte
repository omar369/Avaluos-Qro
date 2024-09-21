<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import * as THREE from 'three';
	import { createTransition, Float } from '@threlte/extras';
	import gsap from 'gsap';
	import { elasticOut } from 'svelte/easing';
	// THREE.

	export let position: [number, number, number] = [0, 0, 0];
	export let geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(3);
	export let rate = 0.5;

	const soundFx = new Audio('/sounds/turn.ogg');

	let visible = false;

	// materiales
	const material = new THREE.MeshStandardMaterial({
		color: 'cornflowerblue',
		roughness: 0.1,
		metalness: 0.5
	});

	// click a objetos 3d
	function handleClick(event: MouseEvent) {
		//sonido
		soundFx.play();

		//animación
		if ('object' in event && event.object instanceof THREE.Mesh) {
			gsap.to(event.object.rotation, {
				// x: `+=2`,
				y: `+=2`,
				// z: `+=2`,
				duration: 1.5,
				ease: 'expo.out',
				yoyo: true
			});
		}
		console.log('click en threeJs obj');
	}

	const bounce = createTransition((ref) => {
		return {
			tick(t) {
				if (t > 0) visible = true;
				ref.scale.set(t, t, t);
			},
			easing: elasticOut,
			duration: gsap.utils.random(800, 1200),
			delay: gsap.utils.random(0, 500)
		};
	});
</script>

<Threlte.Group position={position.map((p) => p * 2.1)}>
	<Float
		speed={3 * rate}
		rotationSpeed={3 * rate}
		rotationIntensity={3 * rate}
		floatIntensity={3 * rate}
	>
		<Threlte.Mesh {geometry} {material} {visible} in={bounce} interactive on:click={handleClick}
		></Threlte.Mesh>
	</Float>
</Threlte.Group>
