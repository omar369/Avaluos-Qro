<script lang="ts">
	import { onMount } from 'svelte';
	import type { Content } from '@prismicio/client';
	import Button from '$lib/components/Button.svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import Image from './Image.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { PrismicRichText } from '@prismicio/svelte';
	import { gsap } from 'gsap';

	export let slice: Content.AboutSlice;

	// Usamos un div para enlazar la referencia del HTMLElement
	let section: HTMLElement | null = null;

	const handleScroll = () => {
		if (section) {
			const rect = section.getBoundingClientRect();
			const isVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight + 500 || document.documentElement.clientHeight + 500);
			
			// Aparecer con gsap
			if (isVisible) {
				gsap.to(section, { opacity: 1, y: -180, duration: 0.1, ease: 'power1.inOut' });
			} else {
				gsap.to(section, { opacity: 0, y: -150, duration: 0.2,ease: 'power1.inOut' });
			}
		}
	};

	// onMount asegura que el código se ejecute después de que el componente esté montado
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		
		// Limpiar el evento cuando el componente se desmonta
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<!-- Cambiamos el bind:this al div -->
<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div bind:this={section} class="transition-opacity duration-1000 opacity-0">
		<div class="ml-4 grid gap-x-4 gap-y-6 md:grid-cols-[5fr,3fr]">
			<Heading size="xl" class="col-start-1">
				{slice.primary.heading}
			</Heading>

			<div class="col-start-1 prose prose-slate prose-xl">
				<PrismicRichText field={slice.primary.description} />
			</div>
			<Button linkField={slice.primary.button_link} label={slice.primary.button_label} />

			<Image image={slice.primary.image} class="row-start-1 max-w-sm md:col-start-2 md:row-end-3" />
		</div>
	</div>
</Bounded>

<style>
	/* Opcionalmente, puedes personalizar más el estilo de la animación aquí */
</style>
