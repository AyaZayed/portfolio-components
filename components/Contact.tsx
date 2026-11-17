import { profile } from "../data";
import { Reveal, SectionLabel } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-32">
      <SectionLabel>Contact</SectionLabel>
      <Reveal>
        <a href={`mailto:${profile.email}`} className="inline-block break-words border-b-[3px] border-line text-[clamp(1.3rem,5.5vw,3.5rem)] font-extrabold tracking-tight text-accent">
          {profile.email}
        </a>
        <div className="mt-8 flex gap-8 text-sm font-bold uppercase">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </Reveal>
    </section>
  );
}
