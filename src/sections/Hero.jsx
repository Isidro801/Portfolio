import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaChevronDown, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6";

const skills = [
  "SIEM",
  "Redacción de informes",
  "Gestión de riesgos",
  "ISO 27001",
  "ENS",
  "RGPD",
  "Splunk",
  "Redes",
  "Hacking ético",
  "Seguridad en la Nube",
  "Microsoft Sentinel",
  "Microsoft Purview",
  "Microsoft Entra ID",
  "React",
  "Tailwind CSS",

];
export const Hero = () => {
  return (
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-36 md:pb-20">
      {/* Bg - Imagen de fondo y gradientes */}
      <div className="absolute inset-0">
        <img
          src="/GRC-lum.png"
          alt="GRC image"
          className="w-full h-full object-cover opacity-30" // Ligeramente menos opaca para mejor lectura
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      {/* Green Dot - Puntos decorativos animados (se ocultan en muy pequeñas para rendimiento) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {[...Array(20)].map((_, i) => ( // Reduje un poco la cantidad para pantallas pequeñas
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-50"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Contenedor Principal */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* 
          Grid responsive:
          - mobile: flex column (colocación vertical)
          - lg (pantallas grandes): 2 columnas
          He reducido el gap de 12 a 6 para móvil.
        */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* Columna Izquierda - Contenido de Texto (Texto centrado en móvil, izquierda en escritorio) */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Badge superior */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs sm:text-sm text-primary border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                GRC Analyst • SOC N1
              </span>
            </div>

            {/* Headline principal - Títulos ajustados responsively */}
            <div className="space-y-4 w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in tracking-tight">
                Analista de <span className="text-primary glow-text">ciberseguridad</span>
              </h1>

              {/* Línea decorativa - Ajustada para no desbordar en móvil */}
              <div className="w-3/4 h-px bg-gradient-to-r from-primary via-primary/50 to-transparent mx-auto lg:mx-0" />

              <h2 className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl text-white/90 leading-snug">
                Gobierno, riesgo y cumplimiento.
              </h2>

              {/* Párrafo - Ajustado tamaño de texto y márgenes */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 animation-delay-200 leading-relaxed">
               Mi nombre es Isidro José Peralta, y soy un perfil orientado a la convergencia entre la seguridad técnica y la estrategia legal. Formándome en marcos GRC, con el objetivo de cerrar la brecha entre las necesidades operativas y los requerimientos regulatorios. Mi motivación es garantizar la resiliencia organizacional mediante estrategias de cumplimiento y gestión de riesgos alineadas con el negocio.
              </p>
            </div>

            {/* CTAs - Botones centrados y con separación en móvil */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-in animation-delay-300 w-full justify-center lg:justify-start">
              <Button size="lg" href="#contact" className="w-full sm:w-auto text-base">
                Contactar <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <a href="/tu-cv.pdf" download="ISIDRO_CV.pdf" className="w-full sm:w-auto">
                <AnimatedBorderButton className="w-full text-base justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Descargar CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social links - Centrados */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 pt-4">
              <span className="text-sm text-muted-foreground">Sígueme: </span>
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/isidro-peralta" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-white/10"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columna Derecha - Imagen de Perfil (Oculta en tablets pequeñas si estorba, visible en desktop) */}
          <div className="relative animate-fade-in animation-delay-300 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
            <div className="relative max-w-sm lg:max-w-md mx-auto">
              
              {/* Efecto de luz detrás de la foto */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/20 via-transparent to-primary/5 blur-3xl" />

              {/* Contenedor de la imagen */}
              <div className="relative glass rounded-3xl p-3 glow-border border border-white/10">
                <img
                  src="/isi.jpg"
                  alt="Isidro José"
                  className="w-full h-auto aspect-[4/5] object-cover rounded-2xl shadow-2xl"
                  loading="lazy" // Importante para el rendimiento
                />

                {/* Floating badge - Disponibilidad */}
                <div className="absolute -bottom-4 sm:-bottom-8 -right-2 sm:-right-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float shadow-xl border border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium">Disponibilidad 24/7</span>
                  </div>
                </div>

                {/* Stats badge - Año Exp */}
                <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 glass-strong rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float animation-delay-500 shadow-xl border border-primary/20">
                  <div className="text-xl sm:text-2xl font-bold text-primary">1</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Año Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section - Carrusel/Marquee (Oculto en pantallas muy pequeñas para evitar scroll horizontal molesto) */}
        <div className="mt-16 sm:mt-20 animate-fade-in animation-delay-600 hidden sm:block">
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 text-center uppercase tracking-widest font-medium">
            Conocimientos normativos & técnicos
          </p>
          <div className="relative overflow-hidden mask-gradient">
            <div className="flex animate-marquee hover:pause-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-6 sm:px-8 py-2">
                  <span className="text-base sm:text-xl font-medium text-muted-foreground/70 hover:text-primary transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Ajustado tamaño */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 hidden md:block">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <FaChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

// NOTA: Asegúrate de tener estas animaciones en tu configuración de tailwind.config.js
// O usa las clases por defecto de animate-pulse/bounce si prefieres no añadirlas.
/*
// tailwind.config.js example additions
module.exports = {
  theme: {
    extend: {
      animation: {
        'slow-drift': 'slow-drift 25s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
      },
      // ...keyframes...
    },
  },
}
*/