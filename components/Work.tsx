import { projects } from "../data";
import { Reveal, SectionLabel } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-32">
      <SectionLabel>Selected work</SectionLabel>
      {projects.map((p, i) => (
        <Reveal key={p.title}>
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-6 md:grid-cols-[3rem_1fr_minmax(0,420px)] md:gap-x-8">
            <span className="pt-2 text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <h3 className="text-[clamp(1.6rem,6vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-accent">{p.title}</h3>
              <p className="mt-1 text-muted">{p.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-0.5 text-xs">{t}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 mt-4 overflow-hidden rounded-sm border border-line md:col-span-1 md:mt-0">
              <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>
          </a>
        </Reveal>
      ))}
    </section>
  );
}
