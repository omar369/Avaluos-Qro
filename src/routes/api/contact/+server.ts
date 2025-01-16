import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();

export const POST: RequestHandler = async ({ request }) => {
	try {
		const {
			nombre,
			correo,
			asunto,
			mensaje
		}: { nombre: string; correo: string; asunto: string; mensaje: string } = await request.json();

		console.log('Datos del formulario recibidos:', {
			nombre,
			correo,
			asunto,
			mensaje
		});

		// Configuración del transporte de correo
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST, // Cambia según tu proveedor (Gmail, Outlook, etc.)
			port: process.env.EMAIL_PORT, // Usa 465 para conexiones seguras SSL/TLS
			secure: true, // True si usas SSL/TLS
			auth: {
				user: process.env.EMAIL_USER, // Tu correo
				pass: process.env.EMAIL_PASS // Contraseña o token de aplicación
			}
		});

		// Configuración del correo
		const mailOptions = {
			from: `"${nombre}" <${correo}>`, // Nombre y correo del remitente
			to: 'omarins.222@gmail.com', // Correo de destino
			subject: asunto, // Asunto del correo
			text: mensaje, // Mensaje en texto plano
			html: `<p><b>Nombre:</b> ${nombre}</p>
				   <p><b>Correo:</b> ${correo}</p>
				   <p><b>Asunto:</b> ${asunto}</p>
				   <p><b>Mensaje:</b> ${mensaje}</p>` // Mensaje en HTML
		};

		// Enviar el correo
		await transporter.sendMail(mailOptions);

		// Respuesta exitosa
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error('Error al procesar la solicitud:', error);
		return new Response(
			JSON.stringify({ success: false, error: 'Error al procesar la solicitud' }),
			{ status: 500 }
		);
	}
};
