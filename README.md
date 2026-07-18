# Branetor — Sitio de marketing

Next.js 14 (App Router) + Tailwind CSS + next-intl (ES/EN).
Home construida según el diseño aprobado (paleta forest/gold/teal, tipografía Fraunces + IBM Plex, mapa de ruta de 9 módulos). Las demás páginas del sitemap están como estructura base, pendientes de contenido completo (Paso 4b).

## Probar en local (opcional)
```
npm install
npm run dev
```
Abre http://localhost:3000 — redirige automáticamente a /es.

## Subir a GitHub
```
git init
git add .
git commit -m "Sitio inicial de Branetor"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/branetor-web.git
git push -u origin main
```
(Crea antes el repositorio vacío "branetor-web" en https://github.com/new — sin README, sin .gitignore, para evitar conflictos)

## Desplegar en Vercel
1. Ve a https://vercel.com/new
2. Importa el repositorio `branetor-web` desde GitHub
3. Vercel detecta Next.js automáticamente — no necesitas cambiar ninguna configuración
4. Click "Deploy"

## Conectar el dominio branetor.com
1. Una vez desplegado, entra al proyecto en Vercel → **Settings → Domains**
2. Agrega `www.branetor.com` y `branetor.com`
3. Copia los registros DNS que te muestre Vercel (A para `@`, CNAME para `www`) y agrégalos en Cloudflare → DNS (deja el ícono de nube en gris / "DNS only")
4. Espera verificación (minutos a horas) — SSL se emite automático
