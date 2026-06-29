import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesBento from '@/components/sections/features/FeaturesBento';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import { Rocket, Search, Smartphone } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Agencia Premium de Diseño"
      title="Diseño páginas web profesionales que convierten visitantes en clientes."
      description="Creo páginas web rápidas, optimizadas para SEO, modernas y totalmente adaptadas a cualquier negocio."
      primaryButton={{
        text: "Solicitar presupuesto",
        href: "#contacto",
      }}
      secondaryButton={{
        text: "Ver trabajos",
        href: "#servicios",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-vector/business-landing-page-concept_23-2148313956.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/computer-laptop-phone-screen-with-abstract-marble-aesthetic_53876-153479.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-ui-ux-landing-page_52683-69729.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-switching-bulbs-using-voice-command-tablet_482257-8730.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-psd/dark-new-year-resolutions-landing-page-template_23-2149128905.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-working-laptop-cafe-with-coffee_9975-24570.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="servicios" data-section="servicios">
    <SectionErrorBoundary name="servicios">
          <FeaturesRevealCardsBento
      tag="Lo que hago"
      title="Servicios web integrales"
      description="Soluciones digitales de alto impacto para negocios ambiciosos."
      items={[
        {
          title: "Diseño web",
          description: "Diseños a medida que destacan tu marca profesionalmente.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/outline-responsive-design_1134-80.jpg",
        },
        {
          title: "Tiendas online",
          description: "E-commerce optimizados para maximizar las ventas y conversiones.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/hands-working-digital-device-network-graphic-overlay_53876-124922.jpg",
        },
        {
          title: "Landing Pages",
          description: "Páginas diseñadas específicamente para atraer y convertir clientes.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/innovation-development-rocket-graphic-concept_53876-120019.jpg",
        },
        {
          title: "Optimización SEO",
          description: "Posicionamiento en buscadores para atraer tráfico de calidad.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/rocket-ship-launching-symbol-green-paper_53876-144724.jpg",
        },
        {
          title: "Diseño Responsive",
          description: "Adaptabilidad total en todos los dispositivos modernos.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-wooden-desk-with-social-media-diagram_1134-64.jpg",
        },
        {
          title: "Mantenimiento web",
          description: "Actualizaciones constantes para mantener tu web al día.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-pos-terminal-paper-check-bill-cards_107791-17432.jpg",
        },
        {
          title: "Velocidad web",
          description: "Optimización de tiempos de carga críticos para el usuario.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/paper-balls-with-lit-bulb_1232-582.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Sobre mí"
      title="Iván, tu aliado digital"
      description="Soy Iván, diseñador web especializado en crear páginas modernas, rápidas y optimizadas para empresas. Durante los últimos 3 años he ayudado a negocios de diversos sectores a mejorar su presencia online mediante soluciones enfocadas en resultados."
      items={[
        {
          icon: Rocket,
          title: "Velocidad",
          description: "Páginas cargadas en milisegundos.",
        },
        {
          icon: Search,
          title: "SEO Optimizado",
          description: "Estructura preparada para Google.",
        },
        {
          icon: Smartphone,
          title: "Responsive",
          description: "Adaptación perfecta en cualquier dispositivo.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-working-laptop-purple-neon-light_23-2152013711.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="proceso" data-section="proceso">
    <SectionErrorBoundary name="proceso">
          <FeaturesBento
      tag="Metodología"
      title="Mi proceso de trabajo"
      description="Un método ágil y transparente diseñado para garantizar el éxito."
      features={[
        {
          title: "Fases de creación",
          description: "Cada etapa cuenta para un resultado final de excelencia.",
          bentoComponent: "checklist-timeline",
          heading: "Proceso",
          subheading: "4 pasos claros",
          checklistItems: [
            {
              label: "Contacto",
              detail: "Analizamos necesidades",
            },
            {
              label: "Diseño",
              detail: "Propuesta profesional",
            },
            {
              label: "Desarrollo",
              detail: "Programación optimizada",
            },
          ],
          completedLabel: "Entrega",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=mo535m",
          imageAlt: "minimalist tech logo",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="ventajas" data-section="ventajas">
    <SectionErrorBoundary name="ventajas">
          <MetricsSimpleCards
      tag="Por qué elegirme"
      title="Resultados comprobados"
      description="La combinación perfecta entre tecnología, diseño y estrategia."
      metrics={[
        {
          value: "24h",
          description: "Entrega rápida",
        },
        {
          value: "100%",
          description: "SEO Optimizado",
        },
        {
          value: "3+",
          description: "Años de experiencia",
        },
        {
          value: "100%",
          description: "Soporte personalizado",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="resenas" data-section="resenas">
    <SectionErrorBoundary name="resenas">
          <TestimonialTrustCard
      quote="Nota: Estas reseñas son ejemplos de diseño y deberán ser reemplazadas por testimonios reales de clientes."
      rating={5}
      author="Reseñas demostrativas (reemplazar)"
      avatars={[
        {
          name: "Carlos M.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-girl-sitting-cafe_1262-3083.jpg",
        },
        {
          name: "Laura G.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-disposable-coffee-cup_107420-12313.jpg",
        },
        {
          name: "Sergio P.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-posing-street_23-2148213514.jpg",
        },
        {
          name: "Marta R.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
        },
        {
          name: "David H.",
          imageSrc: "http://img.b2bpic.net/free-photo/head-shot-happy-beautiful-young-woman-posing-indoors-looking-camera-smiling_74855-10218.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Dudas comunes"
      title="Preguntas frecuentes"
      description="Información clave sobre mis servicios profesionales."
      items={[
        {
          question: "¿Cuánto tardas en hacer una web?",
          answer: "Normalmente entrego el proyecto en unas 24 horas dependiendo del tamaño y complejidad.",
        },
        {
          question: "¿La web es responsive?",
          answer: "Sí, todas mis entregas están totalmente adaptadas a móviles, tablets y ordenadores.",
        },
        {
          question: "¿Incluyes SEO?",
          answer: "Sí, todas las páginas se entregan optimizadas para un posicionamiento SEO excelente.",
        },
        {
          question: "¿Puedo pedir cambios?",
          answer: "Sí, se incluyen revisiones para garantizar que el resultado final supere tus expectativas.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contacto" data-section="contacto">
    <SectionErrorBoundary name="contacto">
          <ContactCta
      tag="Contacto"
      text="¿Listo para llevar tu negocio al siguiente nivel digital?"
      primaryButton={{
        text: "Solicitar presupuesto",
        href: "mailto:contacto@ivandisenoweb.com",
      }}
      secondaryButton={{
        text: "WhatsApp",
        href: "https://wa.me/34600000000",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
