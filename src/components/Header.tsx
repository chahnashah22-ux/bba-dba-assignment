import { PROFILE } from '../data/resumeData';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#capabilities', label: 'Capabilities' },
];

export function Header() {
  return (
    <header className="no-print sticky top-0 z-30 border-b border-[var(--hairline)] bg-[var(--canvas)]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single-line display wordmark */}
        <a
          href="#home"
          className="font-editorial text-xl font-medium tracking-tight text-[var(--ink)] whitespace-nowrap shrink-0"
        >
          {PROFILE.name}
          <span className="text-[var(--accent)]" aria-hidden="true">
            .
          </span>
        </a>

        {/* Zone 2: Four concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--ink-secondary)]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-underline py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[40px] px-4 py-2 text-xs font-semibold tracking-[0.01em] text-white bg-[var(--accent)] rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[var(--accent-hover)]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
