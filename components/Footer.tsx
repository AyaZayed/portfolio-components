import { profile } from "../data";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] justify-between border-t border-line px-4 py-8 text-xs text-muted sm:px-8">
      <span>{profile.first} {profile.last} · {profile.location}</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
