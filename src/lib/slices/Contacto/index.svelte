<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import WhatsBtn from '$lib/components/WhatsBtn.svelte';

	import { type ImageField } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	import type { Content } from '@prismicio/client';

	import { PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.ContactoSlice;

	// export let contact_img: ImageField

	let nombre: string = '';
	let correo: string = '';
	let asunto: string = '';
	let mensaje: string = '';

	const enviarFormulario = async (e: Event) => {
		e.preventDefault();

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ nombre, correo, asunto, mensaje })
			});

			if (response.ok) {
				alert('Formulario enviado exitosamente');
			} else {
				alert('Hubo un problema al enviar el formulario');
			}
		} catch (error) {
			console.error('Error al enviar el formulario:', error);
			alert('Hubo un error, por favor intenta de nuevo.');
		}

		// Vaciar los campos después de enviar (opcional)
		nombre = '';
		correo = '';
		asunto = '';
		mensaje = '';
	};
</script>

<Bounded>
	<Heading size="xl" class="col-start-1 my-4">
		{slice.primary.heading}
	</Heading>
	<div class="ml-4 mb-10 grid gap-x-4 gap-y-6 md:grid-cols-[5fr,3fr]">
		<div class="col-start-1 prose prose-slate prose-xl">
			<PrismicRichText field={slice.primary.details} />
		</div>
		<div class="col-start-2 prose prose-slate prose-xl">
			<WhatsBtn phoneNumber="524426396005" message="Hola, estoy interesado en hacer un avalúo." />
		</div>
	</div>

	<div class="img-contact overflow rounded-1x opacity-1">
		<PrismicImage
			field={slice.primary.contact_img}
			class="h-full object-fill"
			imgixParams={{ q: 90 }}
		/>
	</div>

	<form on:submit={enviarFormulario} class="space-y-4">
		<Heading size="md" class="col-start-1 my-4">Envía un correo:</Heading>
		<div>
			<label for="nombre" class="block text-sm font-medium text-gray-700"
				>{slice.primary.name}</label
			>
			<input
				id="nombre"
				bind:value={nombre}
				type="text"
				required
				class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:ring-blue-700 sm:text-sm"
			/>
		</div>

		<div>
			<label for="correo" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
			<input
				id="correo"
				bind:value={correo}
				type="email"
				required
				class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:ring-blue-700 sm:text-sm"
			/>
		</div>

		<div>
			<label for="asunto" class="block text-sm font-medium text-gray-700">Asunto</label>
			<input
				id="asunto"
				bind:value={asunto}
				type="text"
				required
				class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:ring-blue-700 sm:text-sm"
			/>
		</div>

		<div>
			<label for="mensaje" class="block text-sm font-medium text-gray-700">Mensaje</label>
			<textarea
				id="mensaje"
				bind:value={mensaje}
				required
				class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:ring-blue-700 sm:text-sm"
			></textarea>
		</div>

		<button
			type="submit"
			class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
		>
			Enviar
		</button>
	</form>
</Bounded>

<style>
	.img-contact {
		perspective: 500px;
		perspective-origin: 150% 150%;
	}
</style>
