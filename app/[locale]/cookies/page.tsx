import { getLocale } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const COPY = {
  es: {
    title: "Política de Cookies",
    updated: "Última actualización: 22 de septiembre de 2026",
    sections: [
      {
        h: "1. Qué son las cookies",
        b: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Ayudan a que el sitio funcione correctamente y también pueden usarse para entender cómo los visitantes usan el sitio.",
      },
      {
        h: "2. Cookies y analítica que utilizamos",
        b: "Cookies esenciales: necesarias para la funcionalidad principal, como mantener tu sesión iniciada (por ejemplo, cookies establecidas por la autenticación de Supabase). Estas no pueden desactivarse sin afectar el funcionamiento de la plataforma. Analítica — Vercel Web Analytics: utilizamos Vercel Web Analytics para entender el uso agregado de Branetor (por ejemplo, qué páginas se visitan). Esta herramienta no utiliza cookies ni rastrea visitantes individuales; recopila datos anonimizados y agregados. Debido a que no depende de cookies ni almacena identificadores personales, no se requiere un aviso de consentimiento para su uso conforme a los lineamientos actuales, aunque lo revelamos aquí por transparencia.",
      },
      {
        h: "3. Cookies de terceros",
        b: "Si en el futuro incorporamos herramientas adicionales de analítica o contenido incrustado de terceros, estas podrían establecer cookies adicionales, y actualizaremos esta política en consecuencia.",
      },
      {
        h: "4. Gestión de cookies",
        b: "Puedes controlar o eliminar las cookies a través de la configuración de tu navegador. Desactivar las cookies esenciales puede impedir que Branetor funcione correctamente — por ejemplo, es posible que no puedas mantener tu sesión iniciada.",
      },
      {
        h: "5. Cambios a esta política",
        b: "Podemos actualizar esta política ocasionalmente. Notificaremos cambios significativos por correo electrónico o mediante un aviso en el sitio.",
      },
      {
        h: "6. Idioma",
        b: "Esta Política de Cookies se proporciona en inglés y español. En caso de cualquier inconsistencia o conflicto entre ambas versiones, prevalecerá la versión en inglés.",
      },
      {
        h: "7. Contacto",
        b: "info@branetor.com",
      },
    ],
  },
  en: {
    title: "Cookie Policy",
    updated: "Last updated: September 22, 2026",
    sections: [
      {
        h: "1. What are cookies",
        b: "Cookies are small text files stored on your device when you visit a website. They help the site function properly and can also be used to understand how visitors use the site.",
      },
      {
        h: "2. Cookies and analytics we use",
        b: "Essential cookies: required for core functionality, such as keeping you logged in and remembering your session (for example, cookies set by Supabase authentication). These cannot be disabled without affecting the platform's operation. Analytics — Vercel Web Analytics: we use Vercel Web Analytics to understand aggregate usage of Branetor (for example, which pages are visited). This tool does not use cookies and does not track individual visitors; it collects anonymized, aggregated data. Because it does not rely on cookies or store personal identifiers, no consent banner is required for it under current guidance, though we disclose it here for transparency.",
      },
      {
        h: "3. Third-party cookies",
        b: "If we introduce additional third-party analytics or embedded tools in the future, they may set additional cookies, and we will update this policy accordingly.",
      },
      {
        h: "4. Managing cookies",
        b: "You can control or delete cookies through your browser settings. Disabling essential cookies may prevent Branetor from functioning properly — for example, you may not be able to stay logged in.",
      },
      {
        h: "5. Changes to this policy",
        b: "We may update this policy occasionally. We will notify significant changes by email or through a notice on the site.",
      },
      {
        h: "6. Language",
        b: "This Cookie Policy is provided in English and Spanish. In the event of any inconsistency or conflict between the two versions, the English version shall prevail.",
      },
      {
        h: "7. Contact",
        b: "info@branetor.com",
      },
    ],
  },
} as const;

export default async function CookiesPage() {
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
