<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Button from '$lib/components/Button.svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import Image from './Image.svelte'
	import Heading from '$lib/components/Heading.svelte';

	import {  PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.AboutSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
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
</Bounded>
