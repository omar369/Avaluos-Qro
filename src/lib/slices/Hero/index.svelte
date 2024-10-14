<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { onMount } from 'svelte'
	import gsap from 'gsap'
	import Scene from './Scene.svelte';
	export let slice: Content.HeroSlice;

	onMount(() => {
    // Obtenemos el logo por su id
		const logo = document.querySelector("#logo path") as SVGPathElement;
		const avaluos = document.querySelector("#avaluos");
		const inmob = document.querySelector("#inmob");
		const city = document.querySelector("#city");

		// Calcula la longitud total del trazo
		const pathLength = logo.getTotalLength();

		// Configura el estilo inicial del trazo (sin relleno y con stroke azul)
		gsap.set(logo, {
		strokeDasharray: pathLength,
		strokeDashoffset: pathLength,
		stroke: '#1d4ed8', // Azul de Tailwind (blue-700)
		fill: 'none' // Sin relleno al principio
		});

		// Animación del trazo
		gsap.to(logo, {
		strokeDashoffset: 0,
		duration: 2,
		ease: 'power1.inOut',
		onComplete: () => {
			// Cuando termine el trazo, aplica el relleno azul
			gsap.to(logo, {
			fill: '#1d4ed8', // Azul de Tailwind (blue-700)
			duration: 1
			});
		}
		});

		gsap.to(avaluos, {
			opacity: 1,
			duration: 1,
			delay: 2,
			ease: 'power1.inOut',
		})

		gsap.to(inmob, {
			opacity: 1,
			duration: 1,
			delay: 2,
			ease: 'power1.inOut',
		})

		gsap.to(city, {
			opacity: 1,
			duration: 1,
			delay: 2,
			ease: 'power1.inOut',
		});
  	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="px-4 md:px-6"
>
	<div class="mx-auto w-full max-w-7xl">
		<div class="grid grid-cols-1 items-center md:grid-cols-2">
			<!-- CASA 3D -->
			<div
				class="row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0 transform"
			>
				<Scene />
			</div>

			<!-- TÍTULO ANIMADO AVALUOS -->
			<div class="col-start-1 md:row-start-1 mt-20 overflow-hidden">
				<!-- ANIMACIÓN DE STROKE CASA LOGO -->
				<div class="logo-svg">
					<svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="-45 140 300 300" width="600" height="600">

						<path d="m 6.0092698,284.19878 c -9.9563529,-0.20422 -13.4576347,-0.48124 -14.7899117,-1.17019 -4.2355301,-2.19028 -9.0394681,-8.55773 -9.8914101,-13.11071 -0.476078,-2.54428 -0.45849,-48.35845 0.01954,-50.88259 0.474547,-2.50578 1.299131,-4.22066 3.140845,-6.532 7.3536341,-9.22876 37.569419,-39.19605 42.290734,-41.94293 1.800162,-1.04734 4.179586,-1.51238 7.178998,-1.40307 5.345914,0.19482 6.80756,1.365 27.613711,22.10725 21.166915,21.10191 22.903463,23.04623 22.868247,25.60438 -0.03569,2.59211 -2.340555,5.42396 -4.414618,5.42396 -2.507523,0 -4.787149,-1.99787 -24.009879,-21.04228 -19.581908,-19.40026 -21.760961,-21.35003 -23.37798,-20.91815 -2.59873,0.69408 -37.5203148,35.71214 -39.3188994,39.42751 -0.9467265,1.95568 -0.5841575,49.26356 0.3933455,51.32349 1.3703696,2.88784 -1.496423,2.81366 118.6597779,3.07023 96.90879,0.20693 107.17908,0.30305 109.03793,1.02044 2.16806,0.83674 3.03504,4.12435 1.75634,6.66009 -0.79743,1.58137 -1.39986,1.80912 -5.67539,2.14568 -4.30405,0.33879 -195.964003,0.53717 -211.4813802,0.21889 z" fill="none" stroke="none" stroke-width="1"/>
					</svg>
				</div>
				<div class="-translate-y-[460px] pl-20">
					<h1
						id="avaluos" class="ml-2 opacity-0 transform mb-5 md:mb-8 text-[clamp(5rem,16vmin,16rem)] font-bold leading-none tracking-tighter text-nowrap"
					>
						<span class="block text-blue-700">{slice.primary.title}</span>
					</h1>
					<h3
					id="inmob" class="opacity-0 ml-10 mt-10 md:mb-8 text-[clamp(1rem,8vmin,10rem)] font-bold leading-none tracking-tighter text-nowrap transform"
					>
						<span class="block text-blue-700 -mt-[.6em]">{slice.primary.subtitle}</span>
					</h3>
					<span
					id="city" class="opacity-0 ml-[2.5em] block bg-gradient-to-tr -mt-[1.2em] text-[clamp(1rem,10vmin,12rem)] from-gray-800 via-gray-600 to-gray-400 bg-clip-text text-transparent text-4xl font-bold uppercase tracking-[.2em] md:text-4xl opacity-0.5 transform"
					>
						{slice.primary.city}
					</span>
				</div>	
			</div>
		</div>
	</div>
</section>
