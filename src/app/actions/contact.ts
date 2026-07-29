"use server";

import { Resend } from "resend";
import { z } from "zod";

// Create Resend instance (it will look for RESEND_API_KEY environment variable)
const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContact(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const validated = contactSchema.parse(data);

    // If no API key is set, we just simulate a successful request for demonstration purposes
    if (!process.env.RESEND_API_KEY) {
      console.log("Mock contact form submission:", validated);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true };
    }

    const { error } = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>", // Cambiar cuando tengas un dominio verificado
      to: ["sofiagenchi.dev@gmail.com"], // El email de Sofia
      replyTo: validated.email,
      subject: `Nuevo mensaje de portafolio de ${validated.name}`,
      text: `Nombre: ${validated.name}\nEmail: ${validated.email}\n\nMensaje:\n${validated.message}`,
    });

    if (error) {
      console.error(error);
      return { success: false, error: "No se pudo enviar el correo" };
    }

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Error de validación" };
  }
}
