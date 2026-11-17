import { skills } from "../data";
import { Reveal, SectionLabel } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-32">
      <SectionLabel>Skills</SectionLabel>
      <Reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.title}>
            <h3 className="mb-3 text-lg font-bold text-accent">{s.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((i) => <li key={i} className="rounded-full border border-line px-3 py-0.5 text-sm">{i}</li>)}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
