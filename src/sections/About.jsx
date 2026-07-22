
// import { Code2 } from "lucide-react"
import { FaScaleBalanced, FaShieldHalved, FaCode, FaBuildingLock, FaBuildingColumns, FaFileSignature, FaChartPie, FaChartBar } from "react-icons/fa6";

const highlights = [
    {
        icon: FaScaleBalanced,
        title: "Conocimiento Normativo",
        description: 
        "Normas como la ISO 27001, ENS, RGPD, NIS2, RIA, con respectivos cursos y acudiendo a webinnars oficiales teóricos y prácticos.",
    },
     {
        icon: FaFileSignature,
        title: "Redacción de informes",
        description: 
        "En mis experiencias he ayudado a la redacción de informes en ámbitos de la ciberseguridad, manteniendo la claridad y el enfoque de cada apartado.",
    },
     {
        icon: FaBuildingLock,
        title: "Ciberseguridad Defensiva",
        description: 
        "Conocimientos: Redes (segmentación, monitoreo, IPv4, Firewall, protocolos), Sistemas Operativos (Linux, Windows), Seguridad en la nube (Azure Sentinel, Purview), Splunk Enterprise (Implementación, SPL), Hacking Ético, Python, Bash.",
    },
     {
        icon: FaChartBar,
        title: "Gestión de riesgos",
        description: 
        "Con las normas ISO 27005, junto con NIST y demás marcos cuantitativos y cualitativos, trato de gestionar los riesgos de la mejora manera posible",
    },
]

export const About = () => {
    return ( 
        <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Entendiendo la ciberseguridad
              <span className="font-serif italic font-normal text-white">
              {" "}
                 desde la perspectiva empresarial
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Profesional de ciberseguridad caracterizado por un enfoque analítico, proactivo 
                y con una marcada vocación por entornos SOC y GRC.
                Sólida especialización en ciberseguridad mediante un Máster,
                 donde he profundizado en las metodologías del Blue Team y técnicas de hacking ético, así como conceptos de GRC.
              </p>
              <p>
               Seleccionado entre un proceso competitivo en Madrid por Iberdrola, lo que me permitirá
                cursar un programa intensivo de especialización en ciberseguridad (bootcamp). Esta experiencia
                 reforzará mi capacidad para operar bajo entornos de alta exigencia y disponibilidad 24x7.
              </p>
              <p>
                
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                Mi objetivo profesional es aportar un perfil híbrido de alto valor,
                 capaz de ejecutar la operatividad técnica propia de un SOC 
                 con el rigor estratégico que exige el cumplimiento normativo (ISO 27001, ENS, NIS2...) y la gestión de riesgos como columna vertebral de la ciberseguridad y la continuidad del negocio. 
              </p>
             
            </div>
            </div>

        

        {/* Right Colum - Hilights */}
        <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
                <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                        <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground"> {item.description}</p>
                </div>
            )
            
            )}

        </div>
        </div>
        </div>
    </section>
    );
};