<script lang="ts">
	// Exportaciones originales
	import { onMount } from 'svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';

	import type { Content, ImageField } from '@prismicio/client'; // Importación de ImageField
	import { PrismicImage } from '@prismicio/svelte'; // Importación de PrismicImage para manejar las imágenes correctamente
	import {  PrismicRichText } from '@prismicio/svelte';
	import IconCircle from '~icons/codicon/circle-large-filled';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	// Declaración de las props que recibe el componente
	export let slice: Content.MetodosSlice;

	let component: HTMLElement;
	let infoVisible: boolean[] = []; // Para controlar el estado de cada animación individualmente

	// Función que maneja el click y anima el div de clase "info" y el <Heading> correspondiente
	function handleClick(index: number) {
		const infoTarget = document.querySelector(`.info-${index}`);
		const headingTarget = document.querySelector(`.heading-${index}`);
		
		if (infoVisible[index]) {
			// Si ya está visible, animamos de vuelta a su posición original
			gsap.to(infoTarget, { y: 0, duration: 0.5, ease: 'power2.inOut' });
			gsap.to(headingTarget, { y: 0, duration: 0.5, delay: 0.1, ease: 'power1.inOut' });
		} else {
			// Si no está visible, animamos hacia arriba la info y el heading
			gsap.to(infoTarget, { y: -400, duration: 0.5, ease: 'power2.inOut' });
			gsap.to(headingTarget, { y: -200, duration: 0.5, ease: 'power2.inOut' });
		}
		infoVisible[index] = !infoVisible[index]; // Alternamos el estado
	}

	// Animación al montar el componente
	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			return;
		}

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: component,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 4,
			},
		});

		tl.fromTo(
			'.tech-row',
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(400, 300) : gsap.utils.random(-400, -300);
				},
			},
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(-300, -500) : gsap.utils.random(300, 500);
				},
				ease: 'power1.inOut',
			}
		);

		// Inicializar la posición del div .info
		gsap.set('.info', { y: 0 });
	});
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="overflow-hidden" bind:this={component}>
	<!-- Iteración sobre los items con nombres de métodos -->
	{#each slice.primary.item as { metodo_color, metodo_name }}
		<div
			class="tech-row mb-2 flex items-center justify-center gap-2 text-slate-300"
			aria-label={metodo_name || undefined}
		>
			{#each Array(16) as _, index}
				<span
					class="tech-item text-4xl font-extrabold uppercase tracking-tighter"
					style="color: {index === 8 && metodo_color ? metodo_color : 'inherit'}"
				>
					{metodo_name}
				</span>
				<span class="text-1xl">
					<IconCircle />
				</span>
			{/each}
		</div>
	{/each}


	<!-- Iteración sobre los métodos con la tarjeta y el componente PrismicImage -->
	<Bounded>
		<!-- Titulo de los métodos de valuación -->
		<Heading size="xl" class=" relative flex justify-center">
			{slice.primary.heading}
		</Heading>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{#each slice.primary.metodos as { name, description, background }, index}
			<button on:click={() => handleClick(index)} class="text-slate-700 py-2 px-4 rounded mt-4">
				<div class="card relative m-5 overflow-hidden rounded-lg" aria-label={name || undefined}>
					<!-- Imagen de fondo -->
					<PrismicImage field={background} class="absolute inset-0 object-cover w-full h-full rounded-lg opacity-50" />
	
					<!-- El título centrado con clase dinámica única -->
					<Heading size="md" class={`heading-${index} absolute inset-0 flex text-center items-center justify-center text-slate-500 hover:text-blue-700 z-10`}>
						{name}
					</Heading>
	
					<!-- Div de info con el efecto esmerilado, con clase única por índice -->
					<div class={`info info-${index} absolute bottom-[-420px] left-0 w-full h-[420px] bg-white/30 backdrop-blur-lg z-20 p-10 text-xl`}>
						<PrismicRichText field={description}/>
					</div>
				</div>
			</button>
			{/each}
		</div>
	</Bounded>
</section>

<style>
	.card {
		height: 500px; /* Altura de la tarjeta */
		border-radius: 10px; /* Esquinas redondeadas */
		border: 3px solid #ffffff; /* Borde blanco */
		transition: all 0.3s ease-in-out;
		position: relative; /* Necesario para el posicionamiento del contenido dentro */
		overflow: hidden; /* Asegura que los elementos no sobresalgan */
	}

	.card:hover {
		border-color: #1e4ed8; /* Cambia el borde a azul en hover */
	}
</style>
