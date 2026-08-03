"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  website: z.string().optional(),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );
  if (timestamps.length >= MAX_SUBMISSIONS) {
    submissions.set(ip, timestamps);
    return true;
  }
  submissions.set(ip, [...timestamps, now]);
  return false;
}

async function getClientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return h.get("x-real-ip") ?? "unknown";
}

export async function submitContact(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      website: (formData.get("website") as string) ?? "",
    };

    const validated = contactSchema.parse(data);

    // Honeypot: si el campo oculto fue completado, es un bot.
    // Devolvemos éxito para no alertarlo, pero no enviamos nada.
    if (validated.website) {
      return { success: true };
    }

    if (isRateLimited(await getClientIp())) {
      return { success: false, error: "Demasiados intentos. Esperá unos minutos." };
    }

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