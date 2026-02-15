import { NeoCard } from "@/components/ui/NeoCard";

import { cn } from "@/lib/utils";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "SCB Tech X",
    period: "2025-PRESENT",
    datetime: "2025",
    desc: "Developed software systems tailored to each client's specific needs, high quality, maintainable and scalable.",
    periodColor: "bg-neo-black text-neo-green",
  },
  {
    id: 2,
    role: "Platform Service Engineer",
    company: "SCB Tech X",
    period: "2021-2025",
    datetime: "2021/2025",
    desc: "Worked closely with designers, developers, and operations teams to develop a DevOps as a Service platform.",
    periodColor: "bg-neo-green text-neo-black border-neo-black",
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "SCB – Siam Commercial Bank",
    period: "2019-2021",
    datetime: "2019/2021",
    desc: "Developed Open APIs for developers and business partners to integrate their applications with SCB services.",
    periodColor: "bg-neo-green text-neo-black border-neo-black",
  },
];

export function Experience() {
  return (
    <NeoCard className="bg-neo-blue text-neo-black relative rounded-2xl p-8 md:col-span-12">
      <div className="border-neo-black mb-8 flex flex-col items-start justify-between border-b-4 pb-4 lg:flex-row lg:items-end">
        <div>
          <span className="font-title bg-neo-black mb-1 inline-block -rotate-1 px-2 py-0.5 text-lg text-white">
            Career Path
          </span>
          <h3 className="text-5xl uppercase">Experience</h3>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {experiences.map((exp) => (
          <li key={exp.id}>
            <article className="shadow-hard hover:shadow-hard-hover group border-neo-black relative flex h-full flex-col rounded-xl border-3 bg-white p-6 transition-all hover:-translate-y-2">
              <time
                className={cn(
                  "mb-3 inline-block w-fit rounded border-2 border-transparent px-2 py-1 text-xs font-black",
                  exp.periodColor
                )}
                dateTime={exp.datetime}
              >
                {exp.period}
              </time>

              <h4 className="text-2xl">{exp.role}</h4>
              <p className="text-neo-pink mt-1 text-sm font-bold">
                {exp.company}
              </p>
              <p className="border-neo-black mt-4 border-l-2 pl-3 text-sm leading-relaxed font-medium">
                {exp.desc}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </NeoCard>
  );
}
