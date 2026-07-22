import { FaArrowUpRightDots, FaGithub } from "react-icons/fa6";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    // {
    //     title:"Implementación de ISO 27001",
    //     description:"Implementación del marco regulatorio ISO 27001",
    //     image:"/projects/proyecto1.png",
    //     tags: ["Iso 27001, SSGI, Redacción de informes, React, Tailwind"],
    //     link: "#",
    //     github: "#",
    // },
    //  {
    //     title:"Evaluación de riesgos cuantitativa",
    //     description:"Evaluación de riesgos cuantitativa y matriz heatmap",
    //     image:"/projects/proyecto2.png",
    //     tags: ["Evaluación de riesgos, Redacción de informes, React, Tailwind"],
    //     link: "#",
    //     github: "#",
    // },
    //  {
    //     title:"Automatización de controles y cumplimiento",
    //     description:"Automatización de controles y cumplimiento continuo",
    //     image:"/projects/proyecto3.png",
    //     tags: ["Automatización, Redacción de informes, React, Tailwind"],
    //     link: "#",
    //     github: "#",
    // },
    {
        title:"GRC Dashboard",
        description:"Realizando un software de gestión de cumplimiento y gestión de riesgos, aplicado a la cadena hotelera ficticia DeepBlue Hotels",
        image:"../assets/projects/GRC-coming-soon.png",
        tags: ["Gestión de riesgos, Cumplimiento normativo, KPIs, Redacción de informes, Auditorías"],
        link: "#",
        github: "#",
    },
     {
        title:"Deep Blue Tanks",
        description:"Trabajo final de Grado. Peceras dinámicas donde el usuaro configurará parámetros físicos y químicos siguiendo el manual de cada especie de las profundidades del océano. *Pasando proyecto a REACT y tecnologías modernas",
        image:"../assets/projects/proyecto4.png",
        tags: ["Javascript, HTML, CSS, PHP, Myql"],
        link: "#",
        github: "#",
    },
]

export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
    {/* Bg gows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">

    {/* Section Header*/}
    <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
        Proyectos personales</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Trayectoria práctica:
            <span className="font-serif italic font-normal text-white">
            {" "}
            Proyectos auténticos.
             </span>
        </h2>
        <p className="text-muted-foreground animated-fade-in animation-delay-200">
        Proyectos personales tanto en tema normativo como mi trabajo final en el ciclo de programación web
        </p>
    </div>

    {/* Proyects Grid */}
    <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
  <div 
    key={idx} 
    className="group flex flex-col glass rounded-2xl overflow-hidden animate-fade-in border border-border bg-card"
    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
  > 
    {/* Contenedor de la Imagen (Altura fija para que la tarjeta sea uniforme) */}
    <div className="relative h-70 w-full overflow-hidden">
      {/* Imagen */}
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Degradado para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Etiqueta Coming Soon - Centrada */}
      
      <div className="absolute inset-0 flex items-center justify-center  z-10">
        <h1 className=" px-8 py-4 rounded-full bg-surface  backdrop-blur-md border border-white/10 text-white font-bold text-4xl uppercase tracking-widest shadow-xl font-serif italic">
  Coming Soon
</h1>
      </div>

      {/* Links de acción (Hover) */}
      {/* <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
        <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
          <FaArrowUpRightDots className="h-5 w-5" />
        </a>
        <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
          <FaGithub className="h-5 w-5" />
        </a>
      </div> */}
    </div>

    {/* Contenido (Debajo de la imagen) */}
    <div className="p-6 space-y-4 flex-1">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <FaArrowUpRightDots className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>
      
      <p className="text-muted-foreground text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIdx) => (
          <span 
            key={tagIdx}
            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
))}
    </div>
    {/* <div className="text-center mt-12 animate-face-in animation-delay-500">
        <AnimatedBorderButton >
        Ver todos los proyectos
        <FaArrowUpRightDots className="w-5 h-5"/>
        </AnimatedBorderButton>
    </div> */}
      </div>
    </section>

    );
};