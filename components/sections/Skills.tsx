import { NeoCard } from "@/components/ui/NeoCard";

import { cn } from "@/lib/utils";

const skills = [
  {
    name: "TypeScript",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "Go",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "Python",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "Java",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "SQL",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "Flutter",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "React",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "Express",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "NestJS",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "Fiber",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "Spring Boot",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "PostgreSQL",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "MongoDB",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "Redis",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
  {
    name: "Docker",
    bg: "bg-neo-yellow",
    text: "text-black",
    hover: "hover:bg-neo-black hover:text-neo-yellow hover:-rotate-2",
  },
];

export function Skills() {
  return (
    <NeoCard className="bg-neo-white group relative overflow-hidden rounded-2xl p-5 md:col-span-12 lg:col-span-8">
      <div className="mb-4 flex flex-col items-start justify-between border-b-4 border-black pb-1 md:flex-row md:items-end">
        <div>
          <span className="font-title mb-1 inline-block -rotate-1 bg-black px-2 py-0.5 text-lg text-white">
            My Skills
          </span>
          <h3 className="text-2xl uppercase">Technology</h3>
        </div>
      </div>

      <ul className="relative z-10 flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className={cn(
              "border-neo-black cursor-default rounded-lg border-2 px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_0px_#0f0f0f] transition-all",
              skill.bg,
              skill.text,
              skill.hover
            )}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </NeoCard>
  );
}
