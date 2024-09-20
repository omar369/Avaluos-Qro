import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const {
			nombre,
			correo,
			asunto,
			mensaje
		}: { nombre: string; correo: string; asunto: string; mensaje: string } = await request.json();

		// Aquí puedes ver la información que llega al servidor
		console.log('Datos del formulario recibidos:', {
			nombre,
			correo,
			asunto,
			mensaje
		});

		// Lógica para enviar los datos a tu servicio (por ejemplo, un servicio de correo)
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error('Error al procesar la solicitud:', error);
		return new Response(
			JSON.stringify({ success: false, error: 'Error al procesar la solicitud' }),
			{ status: 500 }
		);
	}
};
