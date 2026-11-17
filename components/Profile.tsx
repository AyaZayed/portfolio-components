import { profile } from "../data";
import { Reveal, SectionLabel } from "./Reveal";

export function Profile() {
  return (
    <section id="profile" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 md:py-32">
      <SectionLabel>Profile</SectionLabel>
      <Reveal>
        <p className="max-w-[26ch] text-[clamp(1.4rem,4vw,2.6rem)] font-bold leading-[1.15] tracking-tight">{profile.bio}</p>
        <p className="mt-6 text-muted">{profile.location}</p>
      </Reveal>
    </section>
  );
}
