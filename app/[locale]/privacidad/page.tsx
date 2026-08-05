import { getLocale } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const COPY = {
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 5 de agosto de 2026",
    sections: [
      {
        h: "1. Quiénes somos",
        b: 'Branetor ("nosotros") opera la plataforma de planeación estratégica disponible en branetor.com y app.branetor.com.',
      },
      {
        h: "2. Qué información recopilamos",
        b: "Información de cuenta (nombre, correo electrónico, nombre de tu organización); el contenido de tu plan estratégico (la información que ingresas durante las conversaciones guiadas: misión, visión, valores, análisis FODA/MICMAC, objetivos, KPIs, etc.); información de pago, procesada directamente por Stripe — Branetor no almacena números de tarjeta ni datos financieros completos; y datos técnicos básicos (dirección IP, tipo de navegador) con fines de seguridad y funcionamiento del servicio.",
      },
      {
        h: "3. Cómo usamos tu información",
        b: "Para operar la plataforma y generar tu plan estratégico, procesar pagos y gestionar tu suscripción, y comunicarnos contigo sobre tu cuenta (soporte, facturación). No vendemos tu información a terceros.",
      },
      {
        h: "4. Con quién compartimos información",
        b: "Usamos los siguientes proveedores externos para operar el servicio, cada uno con sus propias políticas de privacidad: Supabase (base de datos y autenticación), Stripe (procesamiento de pagos), Anthropic (la IA que genera las conversaciones guiadas de los módulos — el contenido que escribes durante las sesiones se envía a su API para generar las respuestas), y Vercel (hosting).",
      },
      {
        h: "5. Seguridad",
        b: "Implementamos medidas técnicas razonables para proteger tu información, incluyendo control de acceso a nivel de base de datos y transmisión cifrada (HTTPS).",
      },
      {
        h: "6. Retención de datos",
        b: "Conservamos tu información mientras tu cuenta esté activa. Puedes solicitar la eliminación de tu cuenta y datos asociados escribiendo a info@branetor.com.",
      },
      {
        h: "7. Tus derechos",
        b: "Puedes solicitar acceso, corrección o eliminación de tu información en cualquier momento, escribiendo a info@branetor.com.",
      },
      {
        h: "8. Menores de edad",
        b: "Branetor no está dirigido a menores de 18 años.",
      },
      {
        h: "9. Cambios a esta política",
        b: "Podemos actualizar esta política ocasionalmente. Notificaremos cambios importantes por correo o mediante aviso en el sitio.",
      },
      {
        h: "10. Contacto",
        b: "info@branetor.com",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: August 5, 2026",
    sections: [
      {
        h: "1. Who we are",
        b: 'Branetor ("we") operates the strategic planning platform available at branetor.com and app.branetor.com.',
      },
      {
        h: "2. What information we collect",
        b: "Account information (name, email, your organization's name); your strategic plan content (the information you enter during guided conversations: mission, vision, values, SWOT/MICMAC analysis, objectives, KPIs, etc.); payment information, processed directly by Stripe — Branetor does not store card numbers or complete financial data; and basic technical data (IP address, browser type) for security and service operation purposes.",
      },
      {
        h: "3. How we use your information",
        b: "To operate the platform and generate your strategic plan, process payments and manage your subscription, and communicate with you about your account (support, billing). We do not sell your information to third parties.",
      },
      {
        h: "4. Who we share information with",
        b: "We use the following external providers to operate the service, each with its own privacy policy: Supabase (database and authentication), Stripe (payment processing), Anthropic (the AI that generates the guided module conversations — content you write during sessions is sent to their API to generate responses), and Vercel (hosting).",
      },
      {
        h: "5. Security",
        b: "We implement reasonable technical measures to protect your information, including database-level access control and encrypted transmission (HTTPS).",
      },
      {
        h: "6. Data retention",
        b: "We retain your information while your account is active. You can request deletion of your account and associated data by emailing info@branetor.com.",
      },
      {
        h: "7. Your rights",
        b: "You can request access, correction, or deletion of your information at any time by emailing info@branetor.com.",
      },
      {
        h: "8. Minors",
        b: "Branetor is not directed at individuals under 18 years of age.",
      },
      {
        h: "9. Changes to this policy",
        b: "We may update this policy occasionally. We will notify significant changes by email or notice on the site.",
      },
      {
        h: "10. Contact",
        b: "info@branetor.com",
      },
    ],
  },
} as const;

export default async function PrivacidadPage() {
  const locale = (await getLocale()) as "es" | "en";
  setRequestLocale(locale);
  const t = COPY[locale] ?? COPY.es;

  return (
    <main>
      <Nav />
      <section className="max-w-[720px] mx-auto px-8 py-14">
        <h1 className="font-display font-medium text-3xl mb-2">{t.title}</h1>
        <p className="font-mono text-xs text-ink/50 mb-10">{t.updated}</p>
        {t.sections.map((s) => (
          <div key={s.h} className="mb-7">
            <h2 className="font-display font-medium text-lg mb-2 text-forest">{s.h}</h2>
            <p className="text-sm text-ink/70 leading-relaxed">{s.b}</p>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
