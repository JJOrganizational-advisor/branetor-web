import { getLocale } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const COPY = {
  es: {
    title: "Términos de Servicio",
    updated: "Última actualización: 22 de septiembre de 2026",
    sections: [
      {
        h: "1. Aceptación de los términos",
        b: "Al marcar la casilla de aceptación durante el registro, o al crear una cuenta o usar Branetor, confirmas que tienes al menos 18 años, o la mayoría de edad en tu jurisdicción, y que cuentas con la autoridad para aceptar estos Términos en representación de tu organización, si aplica. Aceptas estos Términos y nuestra Política de Privacidad.",
      },
      {
        h: "2. Descripción del servicio",
        b: "Branetor es una plataforma de planeación estratégica guiada por IA, ofrecida por suscripción. El Módulo 1 está disponible de forma gratuita; los Módulos 2 al 9 requieren una suscripción de pago activa.",
      },
      {
        h: "3. Cuentas",
        b: "Eres responsable de mantener la confidencialidad de tu contraseña y de toda actividad realizada en tu cuenta.",
      },
      {
        h: "4. Suscripciones y pagos",
        b: "Los planes se facturan mensual o anualmente, según lo seleccionado. Los pagos son procesados por Stripe. Los precios vigentes de cada plan se muestran en branetor.com/precios antes de que te suscribas. Todos los pagos son definitivos y no reembolsables. Si tu suscripción se cancela o vence, conservas acceso únicamente al Módulo 1.",
      },
      {
        h: "5. Renovación automática y aviso de cancelación",
        b: "Las suscripciones mensuales se renuevan automáticamente al final de cada período de facturación, a menos que se cancelen antes de la fecha de renovación. Puedes cancelar una suscripción mensual en cualquier momento, sin penalización; la cancelación entra en vigor al final del período de facturación en curso. Las suscripciones anuales se renuevan automáticamente por períodos sucesivos de un año, a menos que se cancelen. Te enviaremos un aviso por escrito por correo electrónico al menos 30 días antes de cada fecha de renovación anual, confirmando el próximo cobro y explicando cómo cancelar. Si no proporcionamos este aviso, la renovación no entrará en vigor hasta que se haya dado el aviso correspondiente, conforme a la legislación aplicable de protección al consumidor de Columbia Británica.",
      },
      {
        h: "6. Propiedad del contenido",
        b: "El contenido de tu plan estratégico (lo que escribes y generas usando la plataforma) te pertenece a ti o a tu organización. Branetor no reclama la propiedad de tu contenido. La plataforma Branetor, su software, marca y metodología subyacente siguen siendo propiedad de Branetor y no se transfieren a ti por el uso del servicio.",
      },
      {
        h: "7. Uso aceptable",
        b: "No debes usar Branetor para actividades ilegales ni intentar comprometer la seguridad de la plataforma.",
      },
      {
        h: "8. Limitación de responsabilidad",
        b: 'Branetor se ofrece "tal cual". No garantizamos que el servicio esté libre de errores o sea ininterrumpido. En la máxima medida permitida por la ley, la responsabilidad total de Branetor derivada del uso del servicio no excederá el monto que hayas pagado a Branetor en los 12 meses previos a la reclamación.',
      },
      {
        h: "9. Terminación",
        b: "Podemos suspender o terminar cuentas que infrinjan estos Términos.",
      },
      {
        h: "10. Cesión",
        b: "Podemos ceder o transferir estos Términos y nuestros derechos y obligaciones bajo los mismos, en su totalidad o en parte, incluyendo en relación con un cambio en nuestra estructura empresarial, propiedad, o una venta del negocio, sin requerir tu consentimiento. Estos Términos permanecerán vigentes y vinculantes para cualquier cesionario autorizado.",
      },
      {
        h: "11. Cambios a estos términos",
        b: "Podemos actualizar estos Términos periódicamente. Notificaremos cambios significativos por correo electrónico o mediante un aviso en el sitio. El uso continuado de Branetor después de que los cambios entren en vigor constituye la aceptación de los Términos revisados. Cuando un cambio reduzca tus derechos o aumente tus obligaciones respecto a cancelaciones, reembolsos o devoluciones, te daremos aviso por escrito antes de que el cambio entre en vigor para tu suscripción existente.",
      },
      {
        h: "12. Ley aplicable",
        b: "Estos Términos se rigen por las leyes de la provincia de Columbia Británica, Canadá.",
      },
      {
        h: "13. Idioma",
        b: "Estos Términos de Servicio se proporcionan en inglés y español. En caso de cualquier inconsistencia o conflicto entre ambas versiones, prevalecerá la versión en inglés.",
      },
      {
        h: "14. Contacto",
        b: "info@branetor.com",
      },
    ],
  },
  en: {
    title: "Terms of Service",
    updated: "Last updated: September 22, 2026",
    sections: [
      {
        h: "1. Acceptance of terms",
        b: "By checking the acceptance box at signup, or by creating an account or using Branetor, you confirm that you are at least 18 years old, or the age of majority in your jurisdiction, and that you have the authority to accept these Terms on behalf of your organization if applicable. You agree to these Terms and to our Privacy Policy.",
      },
      {
        h: "2. Service description",
        b: "Branetor is an AI-guided strategic planning platform offered by subscription. Module 1 is available free of charge; Modules 2 through 9 require an active paid subscription.",
      },
      {
        h: "3. Accounts",
        b: "You are responsible for keeping your password confidential and for all activity on your account.",
      },
      {
        h: "4. Subscriptions and payments",
        b: "Plans are billed monthly or annually, as selected. Payments are processed by Stripe. Current pricing for each plan is displayed at branetor.com/precios before you subscribe. All payments are final and non-refundable. If your subscription is cancelled or lapses, you retain access to Module 1 only.",
      },
      {
        h: "5. Automatic renewal and cancellation notice",
        b: "Monthly subscriptions renew automatically at the end of each billing period unless cancelled before the renewal date. You may cancel a monthly subscription at any time, without penalty; cancellation takes effect at the end of the current billing period. Annual subscriptions renew automatically for successive one-year terms unless cancelled. We will send you written notice by email at least 30 days before each annual renewal date, confirming the upcoming charge and explaining how to cancel. If we fail to provide this notice, the renewal will not take effect until proper notice has been given, in accordance with applicable British Columbia consumer protection law.",
      },
      {
        h: "6. Content ownership",
        b: "The content of your strategic plan (what you write and generate using the platform) belongs to you or your organization. Branetor does not claim ownership over your content. The Branetor platform, software, brand, and underlying methodology remain the property of Branetor and are not transferred to you by using the service.",
      },
      {
        h: "7. Acceptable use",
        b: "You must not use Branetor for illegal activities or attempt to compromise the platform's security.",
      },
      {
        h: "8. Limitation of liability",
        b: 'Branetor is provided "as is." We do not guarantee the service will be error-free or uninterrupted. To the maximum extent permitted by law, Branetor\'s total liability arising from your use of the service shall not exceed the amount you paid to Branetor in the 12 months preceding the claim.',
      },
      {
        h: "9. Termination",
        b: "We may suspend or terminate accounts that violate these Terms.",
      },
      {
        h: "10. Assignment",
        b: "We may assign or transfer these Terms and our rights and obligations under them, in whole or in part, including in connection with a change in our business structure, ownership, or a sale of the business, without requiring your consent. These Terms remain binding on any permitted assignee.",
      },
      {
        h: "11. Changes to these terms",
        b: "We may update these Terms from time to time. We will notify significant changes by email or through a notice on the site. Continued use of Branetor after changes take effect constitutes acceptance of the revised Terms. Where a change would reduce your rights or increase your obligations regarding cancellation, refunds, or returns, we will provide written notice before that change takes effect for your existing subscription.",
      },
      {
        h: "12. Governing law",
        b: "These Terms are governed by the laws of the province of British Columbia, Canada.",
      },
      {
        h: "13. Language",
        b: "These Terms of Service are provided in English and Spanish. In the event of any inconsistency or conflict between the two versions, the English version shall prevail.",
      },
      {
        h: "14. Contact",
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
