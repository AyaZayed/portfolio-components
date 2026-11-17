import { profile } from "../data";
import clouds from "../assets/clouds1.webm";
import poster from "../assets/hero.jpg";

const links = [
  { name: "Work", href: "#work" },
  { name: "Profile", href: "#profile" },
  { name: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <header id="top" className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-bg p-4 sm:p-8" style={{ backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" aria-hidden="true" poster={poster}>
        <source src={clouds} type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-shade" />

      <div className="relative z-10">
        <h1 className="mt-[.12em] font-extrabold uppercase leading-[.8] tracking-tight text-accent" style={{ fontSize: "min(34vw, 40svh)" }}>
          {profile.first}
        </h1>
        <p className="mt-6 max-w-[34ch] text-base font-semibold sm:mt-10">{profile.tagline}</p>
      </div>

      <h2 aria-label={profile.last} className="absolute bottom-[4.5rem] right-3 z-10 font-extrabold uppercase leading-[.8] tracking-tight text-accent [writing-mode:vertical-rl] sm:right-8" style={{ fontSize: "min(20vw, 17svh)" }}>
        {profile.last}
      </h2>

      <nav aria-label="Main" className="relative z-10 flex items-center gap-5 text-sm font-bold uppercase tracking-wide sm:gap-16">
        {links.map((l) => (
          <a key={l.name} href={l.href} className="border-b-2 border-transparent py-2 transition-colors hover:border-accent focus-visible:border-accent">
            {l.name}
          </a>
        ))}
        <span className="ml-auto mr-[4.5rem]">2026</span>
      </nav>
    </header>
  );
}
