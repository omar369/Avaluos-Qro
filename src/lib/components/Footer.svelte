<script lang="ts">
	import { type Content, isFilled } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import IconGithub from '~icons/fa6-brands/github';
	import Fa6BrandsFacebook from '~icons/fa6-brands/facebook';

	export let settings: Content.SettingsDocument;
</script>

<footer class="text-slate-700">
	<div
		class="container mx-auto flex mt-20 flex-col items-center justify-between gap-6 py-8 sm:flex-row"
	>
		<!-- NOMBRE PRINCIPAL -->
		<div
			class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start"
		>
			<a
				href="/"
				class="text-md font-extrabold tracking-tighter text-slate-700 transition-color duration-150 hover:text-blue-700"
			>
				{settings.data.name}
			</a>
			<span
				class="hidden text-3xl font-extralight leading-[0] text-slate-400 sm:inline"
				aria-hidden="true">/</span
			>
			<p class="text-sm text-slate-900">
				© {new Date().getFullYear()}
				{settings.data.name}
			</p>
		</div>

		<!-- NAVEGACIÓN DE FOOTER -->
		<nav class="navigation" aria-label="Footer Navigation">
			<ul class="flex items-center gap-1">
				{#each settings.data.nav_item as { link, text }, index}
					<li>
						<PrismicLink
							field={link}
							class="block px-3 py-1 text-base font-semibold text-slate-700 transition-colors duration-150 hover:text-blue-700"
							>{text}</PrismicLink
						>
					</li>
					{#if index < settings.data.nav_item.length - 1}
						<span class="text-3xl font-thin leading-[0] text-slate-400" aria-hidden="true">
							/
						</span>
					{/if}
				{/each}
			</ul>
		</nav>

		<!-- REDES SOCIALES ICONS -->
		<div class="socials inline-flex justify-center sm:justify-end">
			{#if isFilled.link(settings.data.facebook_link)}
				<PrismicLink
					field={settings.data.facebook_link}
					class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-blue-700"
					aria-label={settings.data.name + ' on Github'}
				>
					<Fa6BrandsFacebook />
				</PrismicLink>
			{/if}
			{#if isFilled.link(settings.data.github_link)}
				<PrismicLink
					field={settings.data.github_link}
					class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-blue-700"
					aria-label={settings.data.name + ' on Github'}
				>
					<IconGithub />
				</PrismicLink>
			{/if}
		</div>
	</div>
</footer>
