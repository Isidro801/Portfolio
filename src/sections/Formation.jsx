// import { Code2 } from "lucide-react"
import { FaScaleBalanced, FaShieldHalved, FaCode, FaBuildingLock, FaBuildingColumns, FaFileSignature } from "react-icons/fa6";

const highlights = [
    {
        logo: "iber",
        title: "Bootcamp de Ciberseguridad",
        subtitle: "The Bridge - Iberdrola",
        year: "2026-2027",
        summary: "Formación impartida por The Bridge, financiada por Iberdrola mediante un proceso de selección de entrevistas.",
        techs: [
            "IT & OT", 
            "GRC", 
            "Forense", 
            "Ethical Hacking", 
            "Respuesta ante Incidentes", 
            "SOC"
        ],
    },
    {
        logo: "edibs",
        title: "Máster de Ciberseguridad",
        subtitle: "EDIBS - Zero Day",
        year: "2025-2026",
        summary: "Máster impartido por Zero Day, enfocado en las áreas técnicas de defensa, análisis y normativas del sector.",
        techs: [
            "Linux & Windows", 
            "Bash Scripting", 
            "Splunk", 
            "Blue Team (SOC)", 
            "GRC (ISO y ENS)", 
            "Active Directory", 
            "Hacking Web", 
            "OWASP Top 10", 
            "Forense Digital", 
            "Cloud Security", 
            "OSINT"
        ],
        nota: "10/10"
    },
    {
        logo: "eig.png",
        title: "Desarrollo de aplicaciones web",
        subtitle: "EIG",
        year: "2023-2025",
        summary: "Ciclo superior en Desarrollo de Aplicaciones Web, impartido por la Escuela Internacional de Gerencia, situada en Granada.",
        techs: [
            "Javascript", 
            "Wordpress", 
            "Linux", 
            "Windows", 
            "React", 
            "Tailwind CSS", 
            "HTML/CSS", 
            "PHP", 
            "Python"
        ],
        nota: "9.8/10"
    },
    {
        logo: "esco2.svg",
        title: "Bachillerato",
        subtitle: "Escolapios",
        year: "2019-2022",
        summary: "Etapa de educación secundaria postobligatoria completada con sólida base académica.",
        techs: [], // Sin tecnologías específicas al ser Bachillerato general
        nota: "8.6/10"
    },
];

const certs = [
    {
        category:"blueteam",
        logo:"ms-cert.png",
        icon: FaScaleBalanced,
        title: "SC-900",
        subtitle:"Microsoft",
        description: 
        "Microsoft Sentinel, Azure, Entra ID, Purview, EDR",
    },
    {
      category:"blueteam",  
      logo:"google.png",
      icon: FaCode,
      inProgress:"yes", 
      src:"cibersecurity.png",
        title: "Curso Ciberseguridad Google",
        subtitle:"Google - Coursera",
        description: 
        "Ciberseguridad general, NIST 800-53, redes, Sistemas (Linux), SQL, Python, SOC ",
    }, 
    
    {
      category:"blueteam", 
      logo:"ccst-cy.png", 
      icon: FaBuildingLock,
        title: "CCST Networking",
        subtitle:"CISCO",
        description: 
        "Redes, subnetting, arquitectura de red, OSI y TCP/IP, segmentación de red, IPv4 - IPv6",
    },
    {
      category:"blueteam",  
      logo:"english.png",
      icon: FaCode,
        title: "B2 English for IT",
        subtitle:"CISCO",
        description: 
        "Inglés específico de entornos de trabajos de IT",
    },
  
{
        category:"blueteam",
        logo:"ccst-nt.png",
       icon: FaFileSignature,
        title: "CCST Cybersecurity",
        subtitle:"CISCO",
        description: 
        "Vulnerabilidades, panorama de ciberseguridad general",
    },

    {
        category:"blueteam",
        logo:"BTJA.png",
       icon: FaFileSignature,
        title: "Blue Team Junior Analyst",
        subtitle:"Centri.org",
        description: 
        "Forense, SIEM, Análisis de red, Threat Hunting, Dark web",
    },

     {
        category:"grc",
          logo:"iso.png",
      icon: FaFileSignature,
        title: "ISO 27001:2022",
        subtitle:"Alison Courses",
        description: 
        "Aplicación de ISO/IEC 27001:2022, ISO 27002, ISO 27005, interpretación de la norma",
    },
     {
      category:"grc",  
      logo:"ens2.png",
      icon: FaBuildingLock,
      inProgress:"yes", 
        title: "ENS",
        subtitle:"Ángeles Formación",
        description: 
        "Aplicación de la ENS, interpretación de la norma, auditoría",
    },
    {
      category:"grc",  
      logo:"rgpd.png",
      icon: FaCode,
        title: "RGPD",
        subtitle:"Alison Courses",
        description: 
        "Entendimiento de la norma, aplicación",
    },
    {
      category:"grc", 
      logo:"comptia.png",
      inProgress:"yes", 
      icon: FaCode,
        title: "CompTIA Security +",
        subtitle:"CompTIA",
        description: 
        "Redes, mitigación de amenazas, vulnerabilidades, conceptos generales",
    },
    
]

export const Formation = () => {
    return ( 
        <section id="formation" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8">


        <div className="gap-16 items-center">
          {/* Left Column */}

          <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
        Formación & certificaciones</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Formación académica
          
        </h2>
        <p className="text-muted-foreground animated-fade-in animation-delay-200">
        Enseñanzas académicas que me han ayudado a formarme en el ámbito de la ciberseguridad y el cumplimiento
        </p>
    </div>


            {/* <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
              "Mi objetivo es consolidarme como un perfil híbrido,
                que pueda desenvolverse tanto en entornos regulatorios como en SOC,
                ententiendo así el negocio y velando por la continuidad del mismo"
              </p>
            
            </div> */}
            </div>

        

        {/* Right Colum - Hilights */}
<div className="flex flex-col md:flex-row items-start justify-between gap-6 relative">
  {highlights.map((item, idx) => (
    <div key={idx} className="flex flex-1 items-start relative w-full">
      
      {/* Tarjeta: Añadimos h-full y flex flex-col para que todas midan lo mismo */}
      <div className="glass p-6 rounded-2xl animate-fade-in w-full h-full z-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]">
        
      {/* LOGO DE FONDO CENTRADO */}
      {/* LOGO DE FONDO CENTRADO */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] filter contrast-125 z-0">
  {item.logo === "iber" ? (
    <div className="flex items-center justify-center w-40 h-40 gap-4">
      <img src="formation/bridge2.jpg" alt="" className="w-1/2 h-full object-contain" />
      <img src="formation/iber.ico" alt="" className="w-1/2 h-full object-contain" />
    </div>
  ) : item.logo === "edibs" ? (
    <div className="flex items-center justify-center w-40 h-40 gap-4">
      <img src="formation/edibs.jpg" alt="" className="w-1/2 h-full object-contain" />
      <img src="formation/zero.webp" alt="" className="w-1/2 h-full object-contain" />
    </div>
  ) : (
    <img src={`formation/${item.logo}`} alt="" className="w-40 h-40 object-contain" />
  )}
</div>

        {/* CONTENIDO SUPERIOR */}
        <div className="z-10 relative">
  {/* Nota en la esquina superior derecha */}
  {item.nota && (
    <span className="absolute -top-1 -right-1 text-xs font-medium text-muted-foreground bg-primary/10 px-2.5 py-1 rounded-full border border-primary/25 z-20">
      {item.nota}
    </span>
  )}

  {/* Contenedor del logo principal unificado */}
  <div className="w-20 h-17 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center mb-4 overflow-hidden p-2.5 shadow-inner">
    {item.logo === "iber" ? (
      <div className="flex items-center justify-around w-full h-full gap-1">
        <img src="formation/bridge2.jpg" alt="The Bridge" className="w-1/2 h-full object-contain filter drop-shadow-md" />
        <img src="formation/iber.ico" alt="Iberdrola" className="w-1/2 h-full object-contain filter drop-shadow-md" />
      </div>
    ) : item.logo === "edibs" ? (
      <div className="flex items-center justify-around w-full h-full gap-1">
        <img src="formation/edibs.jpg" alt="EDIBS" className="w-1/2 h-full object-contain filter drop-shadow-md" />
        <img src="formation/zero.webp" alt="Zero Day" className="w-1/2 h-full object-contain filter drop-shadow-md" />
      </div>
    ) : (
      <img src={`formation/${item.logo}`} alt={item.title} className="w-full h-full object-contain filter drop-shadow-md" />
    )}
  </div>
  
  <h3 className="text-lg font-semibold mb-1 text-white tracking-tight">{item.title}</h3>
  
  <div className="flex items-center justify-between mb-4">
    <span className="text-sm font-medium text-primary">
      {item.subtitle}
    </span>
    <span className="text-sm font-medium text-muted-foreground">
      {item.year}
    </span>
  </div>
</div>

        {/* CONTENIDO INFERIOR: Usamos 'mt-auto' para anclarlo abajo si sobra espacio y unificar alturas */}
        <div className="space-y-3 border-t border-white/5 pt-4 z-10 relative ">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.summary}
          </p>
          
          {item.techs && item.techs.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.techs.map((tech, tIdx) => (
                <span key={tIdx} className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-md border border-primary/10">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Línea conectora */}
      {idx < highlights.length - 1 && (
        <div className="hidden md:flex absolute top-10 left-[calc(100%-24px)] w-[48px] h-0.5 bg-primary/40 items-center justify-center z-0">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        </div>
      )}
    </div>
  ))}
</div>





{/* Certs */}

<br/>
<div className="gap-16 items-center">
          {/* Left Column */}
          <div className="text-center mx-auto max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            <span className="font-serif italic font-normal text-white">
            {" "}
          certificaciones.
            </span>
        </h2>
        <p className="text-muted-foreground animated-fade-in animation-delay-200">
        Certificaciones en el ámbito de la ciberseguridad general, redes, nube e inglés que me han aportado conocimientos amplios del sector
        </p>
    </div>

            </div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
  

  {/* COLUMNA IZQUIERDA: Blue Team & Otros */}
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      Blue Team & Otras Competencias
    </h3>

    {/* Sub-grid de 2 columnas para las tarjetas */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
  {certs.filter(item => item.category !== "grc").map((item, idx) => (
    <div 
      key={idx} 
      className="glass p-6 rounded-2xl animate-fade-in w-full flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
    >
      
      {/* Indicador opcional de en progreso */}
      {item.inProgress && (
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 z-10">
          <span className="text-[10px] font-medium text-primary tracking-wide uppercase">En curso</span>
          <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        </div>
      )}

      <div>
        {/* Contenedor del logo optimizado */}
        <div className="w-20 h-20 rounded-2xl bg-white/3 border border-white/10 flex items-center justify-center mb-5 overflow-hidden p-3 shadow-inner">
          {item.logo ? (
            <img 
              src={`formation/${item.logo}`} 
              alt={item.title} 
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          ) : (
            <item.icon className="w-8 h-8 text-primary" />
          )}
        </div>

        <h4 className="text-lg font-semibold mb-1 text-white tracking-tight">{item.title}</h4>
        <span className="block text-sm font-medium text-primary mb-3">
          {item.subtitle}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
    </div>
  ))}
</div>
  </div>
  
  {/* COLUMNA DERECHA: GRC */}
<div className="space-y-6">
  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-primary"></span>
    Gobierno, Riesgo y Cumplimiento (GRC)
  </h3>
  
  {/* Sub-grid de 2 columnas para las tarjetas */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
    {certs.filter(item => item.category === "grc").map((item, idx) => (
      <div 
        key={idx} 
        className="glass p-6 rounded-2xl animate-fade-in w-full flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
      >
        
        {/* Indicador de "En progreso" (Solo se muestra si item.inProgress es true) */}
        {item.inProgress && (
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 z-10">
            <span className="text-[10px] font-medium text-primary tracking-wide uppercase">En curso</span>
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          </div>
        )}

        <div>
          {/* Contenedor del logo o icono optimizado */}
          <div className="w-20 h-20 rounded-2xl bg-white/3 border border-white/10 flex items-center justify-center mb-5 overflow-hidden p-3 shadow-inner">
            {item.logo ? (
              <img 
                src={`formation/${item.logo}`} 
                alt={item.title} 
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            ) : (
              <item.icon className="w-8 h-8 text-primary" />
            )}
          </div>

          <h4 className="text-lg font-semibold mb-1 text-white tracking-tight">{item.title}</h4>
          <span className="block text-sm font-medium text-primary mb-3">
            {item.subtitle}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    ))}
  </div>
</div>

</div>

        </div>
        
        </div>

        
    </section>
    );
};