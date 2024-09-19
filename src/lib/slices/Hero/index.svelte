<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Scene from './Scene.svelte';
	export let slice: Content.HeroSlice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="px-4 md:px-6"
>
	<div class="mx-auto w-full max-w-7xl">
		<div class="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
			<div
				class="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0"
			>
				<Scene />
			</div>
			<div class="col-start-1 md:row-start-1">
				<h1
					class="mb-2 md:mb-8 text-[clamp(3rem,15vmin,18rem)] font-bold leading-none tracking-tighter text-nowrap"
				>
					<span class="block text-blue-700">{slice.primary.title}</span>
				</h1>
				<h3
					class="mb-2 md:mb-8 text-[clamp(2rem,12vmin,15rem)] font-bold leading-none tracking-tighter text-nowrap"
				>
					<span class="block text-blue-700 -mt-[.6em]">{slice.primary.subtitle}</span>
				</h3>
				<span
					class="job-title block bg-gradient-to-tr -mt-[.9em] from-gray-800 via-gray-600 to-gray-400 bg-clip-text text-transparent text-4xl font-bold uppercase tracking-[.2em] md:text-4xl opacity-0.5"
				>
					{slice.primary.city}
				</span>
			</div>
		</div>
	</div>
</section>
