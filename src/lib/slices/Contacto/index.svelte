<script lang="ts">
	import Bounded from "$lib/components/Bounded.svelte";

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
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ nombre, correo, asunto, mensaje }),
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
  
<Bounded >
	<form on:submit={enviarFormulario} class="space-y-4">
		<div>
		<label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
		<input id="nombre" bind:value={nombre} type="text" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
		</div>

		<div>
		<label for="correo" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
		<input id="correo" bind:value={correo} type="email" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
		</div>

		<div>
		<label for="asunto" class="block text-sm font-medium text-gray-700">Asunto</label>
		<input id="asunto" bind:value={asunto} type="text" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
		</div>

		<div>
		<label for="mensaje" class="block text-sm font-medium text-gray-700">Mensaje</label>
		<textarea id="mensaje" bind:value={mensaje} required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
		</div>

		<button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
		Enviar
		</button>
	</form>
</Bounded>


