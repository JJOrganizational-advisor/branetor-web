import { getLocale } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const COPY = {
  es: {
    title: "Términos de Servicio",
    updated: "Última actualización: 5 de agosto de 2026",
    sections: [
      {
        h: "1. Aceptación de los términos",
        b: "Al usar Branetor, aceptas estos términos.",
      },
      {
        h: "2. Descripción del servicio",
        b: "Branetor es una plataforma de planeación estratégica guiada por inteligencia artificial, ofrecida por suscripción.",
      },
      {
        h: "3. Cuentas",
        b: "Eres responsable de mantener la confidencialidad de tu contraseña y de toda actividad en tu cuenta.",
      },
      {
        h: "4. Suscripciones y pagos",
        b: "Los planes se facturan de forma mensual o anual, según lo elegido. Los pagos son procesados por Stripe. Puedes cancelar tu suscripción en cualquier momento; el acceso continúa hasta el final del período ya pagado.",
      },
      {
        h: "5. Propiedad del contenido",
        b: "El contenido de tu plan estratégico (lo que tú escribes y generas usando la plataforma) te pertenece a ti/tu organización. Branetor no reclama propiedad sobre tu contenido.",
      },
      {
        h: "6. Uso aceptable",
        b: "No debes usar Branetor para actividades ilegales, ni intentar vulnerar la seguridad de la plataforma.",
      },
      {
        h: "7. Limitación de responsabilidad",
        b: 'Branetor se ofrece "tal cual". No garantizamos que el servicio esté libre de errores o interrupciones.',
      },
      {
        h: "8. Terminación",
        b: "Podemos suspender cuentas que violen estos términos.",
      },
      {
        h: "9. Ley aplicable",
        b: "Estos términos se rigen por las leyes de la provincia de Columbia Británica, Canadá.",
      },
      {
        h: "10. Contacto",
        b: "info@branetor.com",
      },
    ],
  },
  en: {
    title: "Terms of Service",
    updated: "Last updated: August 5, 2026",
    sections: [
      {
        h: "1. Acceptance of terms",
        b: "By using Branetor, you agree to these terms.",
      },
      {
        h: "2. Service description",
        b: "Branetor is an AI-guided strategic planning platform, offered by subscription.",
      },
      {
        h: "3. Accounts",
        b: "You are responsible for keeping your password confidential and for all activity on your account.",
      },
      {
        h: "4. Subscriptions and payments",
        b: "Plans are billed monthly or annually, as selected. Payments are processed by Stripe. You can cancel your subscription at any time; access continues until the end of the already-paid period.",
      },
      {
        h: "5. Content ownership",
        b: "The content of your strategic plan (what you write and generate using the platform) belongs to you/your organization. Branetor does not claim ownership over your content.",
      },
      {
        h: "6. Acceptable use",
        b: "You must not use Branetor for illegal activities, or attempt to compromise the platform's security.",
      },
      {
        h: "7. Limitation of liability",
        b: 'Branetor is provided "as is." We do not guarantee the service will be error-free or uninterrupted.',
      },
      {
        h: "8. Termination",
        b: "We may suspend accounts that violate these terms.",
      },
      {
        h: "9. Governing law",
        b: "These terms are governed by the laws of the province of British Columbia, Canada.",
      },
      {
        h: "10. Contact",
        b: "info@branetor.com",
      },
    ],
  },
} as const;

export default async function TerminosPage() {
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
