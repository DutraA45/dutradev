export type ExperienceRole = {
  title: string;
  period: string;
  description: string;
};

export type Experience = {
  company: string;
  logo: string;
  roles: ExperienceRole[];
};

export const experiences: Experience[] = [
  {
    company: "Prod",
    logo: "/company-icons/prod_logo.png",
    roles: [
      {
        title: "Desenvolvedor Fullstack II",
        period: "Set 2022 - Abr 2023",
        description:
          "Atuação com maior autonomia no desenvolvimento front-end e análise de dados. Foco em estratégias data-driven, geração de insights para clientes e otimização de campanhas com base em métricas de performance. Forte atuação no relacionamento com clientes e tomada de decisão orientada por dados.",
      },
      {
        title: "Desenvolvedor Front-End Jr I",
        period: "Abr 2022 - Set 2022",
        description:
          "Atuação em campanhas de marketing digital, com foco em e-mail marketing e SMS. Responsável pela implementação de estratégias, análise de resultados e gestão de leads — iniciativa que evoluiu para um novo produto na agência. Certificação em e-mail marketing pela plataforma VEEVA. Experiência com Wordpress.",
      },
      {
        title: "Assistente de Desenvolvedor Front-End",
        period: "Jul 2021 - Mar 2022",
        description:
          "Criação e disparo de campanhas de e-mail marketing (HTML/CSS), automações, segmentação e análise de resultados. Utilização de ferramentas como RD Station, Mailchimp, Salesforce Marketing Cloud, Dinamize e Zenvia.",
      },
      {
        title: "Mídias de Performance",
        period: "Jan 2021 - Jul 2021",
        description:
          "Planejamento, criação e otimização de campanhas em mídias pagas. Análise de performance, elaboração de relatórios e acompanhamento de clientes. Experiência com Google Ads, Meta Ads, LinkedIn Ads, Google Analytics e Tag Manager.",
      },
      {
        title: "Estágio - Campanhas e E-mail Mkt",
        period: "Ago 2020 - Nov 2020",
        description:
          "Apoio na criação de campanhas de e-mail marketing, desenvolvimento em HTML/CSS e ajustes de layout. Auxílio em melhorias de responsividade e manutenção de páginas.",
      },
      {
        title: "Freelance - Marketing",
        period: "Jun 2020 - Ago 2020",
        description:
          "Atuação em suporte ao cliente, resolução de problemas de acesso e análise de dados. Experiência com Excel avançado e primeiros contatos com SAP (Gigya).",
      },
    ],
  },
  {
    company: "Valgroup",
    logo: "/company-icons/valgroup_logo.jpg",
    roles: [
      {
        title: "Técnico em Eletrônica",
        period: "Jan 2019 - Nov 2019",
        description:
          "Manutenção preventiva e corretiva de equipamentos industriais. Programação básica em CLP (Ladder), controle de estoque via Excel e desenvolvimento de projetos em AutoCAD.",
      },
    ],
  },
];
