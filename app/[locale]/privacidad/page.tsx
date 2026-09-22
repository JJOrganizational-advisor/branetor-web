import { getLocale } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const COPY = {
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 22 de septiembre de 2026",
    sections: [
      {
        h: "1. Quiénes somos",
        b: 'Branetor ("nosotros") opera la plataforma de planeación estratégica guiada por IA disponible en branetor.com y app.branetor.com. La persona responsable de las prácticas de privacidad en Branetor es Julio Jara, Fundador. Puedes contactarnos en info@branetor.com.',
      },
      {
        h: "2. Qué información recopilamos",
        b: "Información de cuenta: tu nombre, correo electrónico y el nombre de tu organización. Contenido de tu plan estratégico: la información que ingresas durante las conversaciones guiadas, incluyendo misión, visión, valores, análisis FODA/MICMAC, objetivos e indicadores clave (KPIs). Información de pago: procesada directamente por Stripe. Branetor no almacena números de tarjeta ni datos financieros completos. Datos técnicos: dirección IP, tipo de navegador e información similar, recopilada para fines de seguridad y operación del servicio. Datos de analítica: datos de uso agregados y sin cookies, recopilados mediante Vercel Web Analytics. Consulta nuestra Política de Cookies para más detalles.",
      },
      {
        h: "3. Cómo usamos tu información",
        b: "Para operar la plataforma y generar tu plan estratégico; para procesar pagos y administrar tu suscripción; para comunicarnos contigo sobre tu cuenta (soporte, facturación, actualizaciones del servicio); para mantener la seguridad y el funcionamiento adecuado de la plataforma; y para comprender patrones de uso agregados y mejorar la plataforma. No vendemos tu información a terceros.",
      },
      {
        h: "4. Comunicaciones de marketing",
        b: "Podemos enviarte correos electrónicos ocasionales de marketing sobre nuevas funciones o actualizaciones del producto, pero solo si has dado tu consentimiento de forma independiente a la creación de tu cuenta. Puedes retirar tu consentimiento en cualquier momento usando el enlace para darte de baja incluido en cada correo de marketing, el cual procesamos dentro de los 10 días hábiles siguientes. Los correos transaccionales relacionados con tu cuenta, facturación u operación del servicio (como recibos o restablecimiento de contraseña) no son comunicaciones de marketing y continuarán independientemente de tus preferencias de marketing, según lo permitido por la Legislación Antispam de Canadá (CASL). Cada correo comercial que enviamos incluye nuestro nombre comercial, una dirección postal y una forma de contactarnos.",
      },
      {
        h: "5. Con quién compartimos información",
        b: "Usamos los siguientes proveedores externos para operar Branetor, cada uno regido por su propia política de privacidad: Supabase (base de datos y autenticación), Stripe (procesamiento de pagos), Anthropic (la IA que impulsa las conversaciones guiadas de los módulos — el contenido que escribes durante las sesiones se envía a su API para generar respuestas), y Vercel (alojamiento y analítica web). No compartimos tu información con ningún otro tercero, salvo cuando lo exija la ley.",
      },
      {
        h: "6. Transferencias internacionales de datos",
        b: "Algunos de nuestros proveedores de servicios, incluidos los mencionados anteriormente, pueden almacenar o procesar información fuera de Canadá, incluyendo en Estados Unidos. Cuando esto ocurre, tu información puede quedar sujeta a las leyes de esa jurisdicción, incluyendo el acceso legal por parte de sus autoridades. Seleccionamos proveedores que mantienen salvaguardas adecuadas para proteger tu información.",
      },
      {
        h: "7. Cookies",
        b: "Branetor utiliza cookies para la funcionalidad esencial de la plataforma. Nuestra analítica no utiliza cookies. Para más detalles, consulta nuestra Política de Cookies.",
      },
      {
        h: "8. Seguridad",
        b: "Implementamos medidas técnicas y organizativas razonables para proteger tu información, incluyendo control de acceso a nivel de base de datos y transmisión cifrada (HTTPS). Ningún método de transmisión o almacenamiento es completamente seguro, y no podemos garantizar seguridad absoluta.",
      },
      {
        h: "9. Notificación de vulneraciones de datos",
        b: "Si ocurre una vulneración de las medidas de seguridad que genere un riesgo real de daño significativo para ti, notificaremos a la Oficina del Comisionado de Privacidad de Canadá y a las personas afectadas, conforme a nuestras obligaciones bajo la ley canadiense de privacidad.",
      },
      {
        h: "10. Retención de datos",
        b: "Conservamos tu información mientras tu cuenta esté activa. Si cancelas tu cuenta, conservamos tu información hasta por 90 días para permitir la reactivación o recuperación, después de lo cual se elimina, salvo que estemos obligados a conservarla por más tiempo por ley. Puedes solicitar la eliminación anticipada escribiendo a info@branetor.com.",
      },
      {
        h: "11. Tus derechos",
        b: "Puedes solicitar acceso, corrección o eliminación de tu información en cualquier momento escribiendo a info@branetor.com. Si no estás satisfecho con nuestra respuesta, tienes derecho a presentar una queja ante la Oficina del Comisionado de Privacidad de Canadá (priv.gc.ca).",
      },
      {
        h: "12. Menores de edad",
        b: "Branetor no está dirigido a personas menores de 18 años, y no recopilamos información de menores de forma consciente.",
      },
      {
        h: "13. Cambios a esta política",
        b: "Podemos actualizar esta política ocasionalmente. Notificaremos cambios significativos por correo electrónico o mediante un aviso en el sitio.",
      },
      {
        h: "14. Idioma",
        b: "Esta Política de Privacidad se proporciona en inglés y español. En caso de cualquier inconsistencia o conflicto entre ambas versiones, prevalecerá la versión en inglés.",
      },
      {
        h: "15. Contacto",
        b: "info@branetor.com",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: September 22, 2026",
    sections: [
      {
        h: "1. Who we are",
        b: 'Branetor ("we," "us") operates the AI-guided strategic planning platform available at branetor.com and app.branetor.com. The person accountable for privacy practices at Branetor is Julio Jara, Founder. You can reach us at info@branetor.com.',
      },
      {
        h: "2. What information we collect",
        b: "Account information: your name, email address, and your organization's name. Strategic plan content: the information you enter during guided conversations, including mission, vision, values, SWOT/MICMAC analysis, objectives, and KPIs. Payment information: processed directly by Stripe. Branetor does not store card numbers or complete financial data. Technical data: IP address, browser type, and similar information, collected for security and service operation. Analytics data: aggregated, cookie-free usage data collected via Vercel Web Analytics. See our Cookie Policy for details.",
      },
      {
        h: "3. How we use your information",
        b: "To operate the platform and generate your strategic plan; to process payments and manage your subscription; to communicate with you about your account (support, billing, service updates); to maintain the security and proper functioning of the platform; and to understand aggregate usage patterns and improve the platform. We do not sell your information to third parties.",
      },
      {
        h: "4. Marketing communications",
        b: "We may send you occasional marketing emails about new features or product updates, but only if you have opted in separately from creating your account. You can withdraw consent at any time using the unsubscribe link included in every marketing email, which we process within 10 business days. Transactional emails related to your account, billing, or service operation (such as receipts or password resets) are not marketing communications and will continue regardless of your marketing preferences, as permitted under Canada's Anti-Spam Legislation (CASL). Every commercial email we send includes our business name, a mailing address, and a way to contact us.",
      },
      {
        h: "5. Who we share information with",
        b: "We use the following external service providers to operate Branetor, each governed by its own privacy policy: Supabase (database and authentication), Stripe (payment processing), Anthropic (the AI that powers the guided module conversations — content you write during sessions is sent to their API to generate responses), and Vercel (hosting and web analytics). We do not share your information with any other third party except as required by law.",
      },
      {
        h: "6. International data transfers",
        b: "Some of our service providers, including those listed above, may store or process information outside Canada, including in the United States. When this occurs, your information may become subject to the laws of that jurisdiction, including lawful access by its authorities. We select providers that maintain appropriate safeguards to protect your information.",
      },
      {
        h: "7. Cookies",
        b: "Branetor uses cookies for essential platform functionality. Our analytics are cookie-free. For details, see our Cookie Policy.",
      },
      {
        h: "8. Security",
        b: "We implement reasonable technical and organizational measures to protect your information, including database-level access control and encrypted transmission (HTTPS). No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      },
      {
        h: "9. Data breach notification",
        b: "If a breach of security safeguards occurs that creates a real risk of significant harm to you, we will notify the Office of the Privacy Commissioner of Canada and affected individuals, in accordance with our obligations under Canadian privacy law.",
      },
      {
        h: "10. Data retention",
        b: "We retain your information while your account is active. If you cancel your account, we retain your information for up to 90 days to allow for reactivation or recovery, after which it is deleted, except where we are required to retain it longer by law. You can request earlier deletion by emailing info@branetor.com.",
      },
      {
        h: "11. Your rights",
        b: "You can request access, correction, or deletion of your information at any time by emailing info@branetor.com. If you are not satisfied with our response, you have the right to file a complaint with the Office of the Privacy Commissioner of Canada (priv.gc.ca).",
      },
      {
        h: "12. Minors",
        b: "Branetor is not directed at individuals under 18 years of age, and we do not knowingly collect information from minors.",
      },
      {
        h: "13. Changes to this policy",
        b: "We may update this policy occasionally. We will notify significant changes by email or through a notice on the site.",
      },
      {
        h: "14. Language",
        b: "This Privacy Policy is provided in English and Spanish. In the event of any inconsistency or conflict between the two versions, the English version shall prevail.",
      },
      {
        h: "15. Contact",
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
