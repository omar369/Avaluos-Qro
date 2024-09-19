<script lang="ts">
	import clsx from 'clsx';

	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
	export let size: 'xl' | 'lg' | 'md' | 'sm' = 'lg';
	let className: string = '';
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={clsx(
		'font-bold leading-tight tracking-tight  text-slate-600',
		size === 'xl' && 'text-5xl md:text-6xl',
		size === 'lg' && 'text-3xl md:text-4xl',
		size === 'md' && 'text-2xl md:text-3xl',
		size === 'sm' && 'text-0xl md:text-1xl',
		className
	)}
>
	<slot />
</svelte:element>