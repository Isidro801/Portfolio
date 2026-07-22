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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/GRC-lum.png"
          alt="GRC image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/*Green Dot*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s `,
            }}
          />
        ))}
      </div>

      {/*Content*/}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Colum - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                GRC Analyst • SOC N1
              </span>
            </div>

            {/* Headline*/}
            <div className="space-y-6"> {/* Aumenté un poco el espacio general */}
  
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
    Analista de <span className="text-primary glow-text">ciberseguridad</span>
  </h1>

  {/* Aquí integramos la línea decorativa */}
  <div className="w-100 h-px bg-gradient-to-r from-primary to-transparent" />

  <h1 className="font-serif italic font-normal text-4xl md:text-4xl text-white">
    Gobierno, riesgo y cumplimiento.
  </h1>

  <p className="text-lg text-muted-foreground max-w-lg animation-delay-200">
    Mi nombre es Isidro José Peralta, y soy un perfil orientado a la convergencia entre la seguridad técnica y la estrategia legal. 
    Formándome en marcos GRC, con el objetivo de cerrar la brecha entre las necesidades 
    operativas y los requerimientos regulatorios. Mi motivación es garantizar la resiliencia 
    organizacional mediante estrategias de cumplimiento y gestión de riesgos alineadas con el negocio.
  </p>

</div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" href="#contact">
                Contactar <ArrowRight className="w-5 h-5" />
              </Button>

              <a href="/tu-cv.pdf" download="ISIDRO_CV.pdf">
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                  Descargar CV
              </AnimatedBorderButton>
              </a>
            </div>

            
            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Sígueme: </span>
              {[
                
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/isidro-peralta" },
              ].map((social, idx) => {
                // 2. Asignamos a una variable con mayúscula para que React la trate como componente
                const Icon = social.icon;

                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {/* 3. Renderizamos el componente con el tamaño deseado */}
                    <Icon size={20} className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>


          {/* Right Colum - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
        
        <div className="relative max-w-md mx-auto">
         <div
                className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />
            

            <div className="relative glass rounded-3xl p-2 glow-border">
                <img 
                src="/isi.jpg" 
                alt="Isidro José" 
                className="w-full aspect-4/5 object-cover rounded-2xl"/>

                {/*Floating badge*/}
                <div className="absolute -bottom-8 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Disponibilidad 24/7</span>
                  </div>

                </div>

                {/*Stats badge*/}
              <div className="absolute -top-4 -left-4 glass-strong rounded-xl px-4 py-3 animate-float animation-delay-500">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-xs text-muted-foreground">Año Exp.</div>
              </div>
            </div>
        
        </div>
        </div>

        </div>

        {/*Skills section*/}
         <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Conocimientos normativos & técnicos
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FaChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>



    </section>
  );
};
