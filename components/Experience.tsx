import { experiences } from "../data";
import { Reveal, SectionLabel } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-32">
      <SectionLabel>Experience</SectionLabel>
      {experiences.map((e) => (
        <Reveal key={e.title}>
          <div className="border-t border-line py-6">
            <h3 className="text-[clamp(1.5rem,5vw,2.5rem)] font-extrabold leading-[1.05] tracking-tight text-accent">{e.title}</h3>
            <p className="mt-1 text-sm text-muted">{e.company} · {e.location} · {e.period}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
