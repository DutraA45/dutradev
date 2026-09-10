/** Para que serve cada ferramenta — o stack é mostrado agrupado por função. */
export const techGroups = [
  "Interface",
  "Linguagem e runtime",
  "Qualidade",
] as const;

export type TechGroup = (typeof techGroups)[number];

export type TechStackItem = {
  name: string;
  icon: string;
  group: TechGroup;
};

export const techStack: TechStackItem[] = [
  { name: "React", icon: "/tech-icons/reactjs.svg", group: "Interface" },
  { name: "Next", icon: "/tech-icons/next.svg", group: "Interface" },
  { name: "Tailwind", icon: "/tech-icons/tailwind.svg", group: "Interface" },
  { name: "Shadcn UI", icon: "/tech-icons/shadcn.svg", group: "Interface" },
  { name: "Typescript", icon: "/tech-icons/ts.svg", group: "Linguagem e runtime" },
  { name: "Javascript", icon: "/tech-icons/js.svg", group: "Linguagem e runtime" },
  { name: "Node", icon: "/tech-icons/node.svg", group: "Linguagem e runtime" },
  { name: "Jest", icon: "/tech-icons/jest.svg", group: "Qualidade" },
  { name: "Cypress", icon: "/tech-icons/cypress.svg", group: "Qualidade" },
];
