import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#servicios" },
  { name: "Sobre mí", href: "#about" },
  { name: "Contacto", href: "#contacto" },
  { name: "Proceso", href: "#proceso" },
  { name: "Ventajas", href: "#ventajas" },
  { name: "Resenas", href: "#resenas" }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="noise" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="IvanDiseñoWeb"
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3Fp4xaa76hoCedVVjKM5K4THBWm/uploaded-1782761562923-byhigggg.png"
      ctaButton={{
        text: "Solicitar presupuesto",        href: "#contacto"}}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="IvanDiseñoWeb"
      columns={[
        {
          title: "Navegación",          items: [
            { label: "Inicio", href: "#hero" },
            { label: "Servicios", href: "#servicios" },
            { label: "Sobre mí", href: "#about" },
            { label: "Contacto", href: "#contacto" },
          ],
        },
        {
          title: "Legal",          items: [{ label: "Política de privacidad", href: "#" }],
        },
      ]}
      copyright="© 2026 IvanDiseñoWeb. Todos los derechos reservados."
      links={[
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Email", href: "mailto:contacto@ivandisenoweb.com" },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}