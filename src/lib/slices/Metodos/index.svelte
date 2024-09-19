<script lang="ts">
	import {onMount} from 'svelte'
	
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';

	import type { Content } from '@prismicio/client';
	import IconCircle from '~icons/codicon/circle-large-filled'
	import {gsap} from 'gsap'
	import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

	gsap.registerPlugin(ScrollTrigger) 

	export let slice: Content.MetodosSlice;

	let component: HTMLElement

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
				scrub: 4
			}
		});

		tl.fromTo(
			'.tech-row',
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(400, 300) : gsap.utils.random(-400, -300);
				}
			},
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(-300, -500) : gsap.utils.random(300, 500);
				},
				ease: 'power1.inOut'
			}
		);
	});

</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="overflow-hidden" bind:this={component}>
	<!-- <Bounded as="div">
		<Heading size="xl" class='mb-8' tag='h2'>
			{slice.primary.heading}
		</Heading>
	</Bounded> -->

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
</section>
