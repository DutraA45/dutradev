import Image from "next/image";

export default function portfolio() {
  const projects = [
    {
      title: "Health Tracker",
      description: "Aplicativo móvel para monitoramento de saúde, atividades físicas e nutrição com gráficos interativos e personalizados.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Mobile+App",
      tags: [
        { name: "React Native", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" }
      ],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de comércio eletrônico completa com carrinho de compras, checkout e integração com pagamentos.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=E-commerce",
      tags: [
        { name: "Next.js", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "MongoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" }
      ],
      link: "#"
    },
    {
      title: "Task Management",
      description: "Sistema de gerenciamento de tarefas com drag-and-drop, categorias e lembretes inteligentes.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Task+App",
      tags: [
        { name: "Vue.js", icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
        { name: "Firebase", icon: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" }
      ],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Website pessoal para exibição de projetos com design responsivo e animações modernas.",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=Portfolio",
      tags: [
        { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
      ],
      link: "#"
    }
  ];

  return (
    <>
      <div className="content-col p-8 w-full">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold mb-6 text-green-500">
            Portfólio
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative h-56 rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="inline-flex items-center bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-gray-700">
                        <img
                          src={tag.icon}
                          alt={tag.name}
                          className="w-3 h-3 mr-1.5"
                        />
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="text-indigo-400 text-sm font-medium inline-flex items-center hover:underline"
                  >
                    Ver projeto <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        <div className="md:hidden block mt-auto pt-6 text-gray-400 text-xs">
          © 2025 Dutra.dev. All rights reserved.
        </div>
      </div>
    </>
  );
}