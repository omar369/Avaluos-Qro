<script lang="ts">
	import { T as Threlte } from '@threlte/core';
	import * as THREE from 'three';
	import Geometry from './Geometry.svelte';
	import { ContactShadows, Environment, interactivity, transitions } from '@threlte/extras';
	import Casa from './Casa.svelte';
	import Lupa from './Lupa.svelte';
	import Money from './Money.svelte';
	// THREE.
	interactivity();
	transitions();
</script>

<Threlte.PerspectiveCamera
	makeDefault
	position={[0, 0, 25]}
	aspect={1}
	fov={30}
	near={1}
	far={40}
/>
<Environment files="smallroom.hdr" path="/" format="hdr" />
<ContactShadows position={[0, -3.5, 0]} opacity={0.65} scale={40} blur={1} far={9} />

<!-- elemento central -->
<Casa />
<!-- elemento 2 -->
<Lupa />
<!-- elemento 3 -->
<Money />
<!-- <Geometry position={[-1.4, 2, -4]} rate={0.6} geometry={new THREE.DodecahedronGeometry(1.5)} /> -->
