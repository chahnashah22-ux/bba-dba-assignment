import { useState } from 'react';
import { ArrowUpRight, Printer } from 'lucide-react';
import { HERO_HIGHLIGHTS, PROFILE } from '../data/resumeData';

export function Hero() {
  const [imageError, setImageError] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="home"
      className="mx-auto max-w-[1160px] px-5 sm:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Print-only compact identity bar */}
      <div className="hidden print:flex items-baseline justify-between border-b border-[var(--hairline)] pb-3 mb-6">
        <span className="text-sm font-medium text-[var(--ink-secondary)]">
          {PROFILE.eyebrow}
        </span>
        <span className="font-mono text-xs text-[var(--ink-secondary)]">
          {PROFILE.email}
        </span>
      </div>

      {/* Asymmetric two-column split */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] items-stretch gap-10 lg:gap-16">
        <div className="flex flex-col justify-between py-2">
          <div>
            <p className="text-sm font-medium tracking-[0.03em] text-[var(--accent)]">
              {PROFILE.eyebrow}
            </p>

            <h1
              className="font-editorial headline-balance mt-5 font-normal tracking-[-0.03em] text-[var(--ink)]"
              style={{
                fontSize: 'clamp(2.9rem, 5.8vw, 5.25rem)',
                lineHeight: 1.04,
              }}
            >
              Chahna
              <br />
              Shah
              <span className="text-[var(--accent)]" aria-hidden="true">
                .
              </span>
            </h1>

            <p className="mt-7 max-w-[54ch] text-base sm:text-[17px] leading-[1.7] text-[var(--ink-secondary)]">
              {PROFILE.heroBio}
            </p>
          </div>

          <div className="no-print mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 text-sm font-semibold text-white bg-[var(--accent)] rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[var(--accent-hover)]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 text-sm font-medium text-[var(--ink-secondary)] border border-[var(--hairline)] bg-transparent rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[var(--ink-secondary)] hover:text-[var(--ink)] cursor-pointer"
            >
              <Printer className="h-4 w-4" aria-hidden="true" />
              <span>Print Resume</span>
            </button>
          </div>
        </div>

        {/* Right portrait column matching left height */}
        <div className="flex flex-col">
          <div className="portrait-arch relative w-full max-w-[360px] mx-auto lg:max-w-none lg:h-full min-h-[380px] aspect-[4/5] lg:aspect-auto overflow-hidden border border-[var(--hairline)] bg-[var(--accent-soft)]">
            {!imageError ? (
              <img
                src={PROFILE.portraitSrc}
                alt={PROFILE.portraitAlt}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div
                aria-label={PROFILE.portraitAlt}
                className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[var(--accent-soft)] to-[var(--surface-tint)] p-8 text-center"
              >
                <span className="font-editorial text-5xl font-medium tracking-tight text-[var(--accent)]">
                  CS
                </span>
                <span className="mt-3 text-sm font-medium text-[var(--ink-secondary)]">
                  {PROFILE.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full-width hairline-divided highlight strip below split */}
      <div className="mt-12 lg:mt-16 border border-[var(--hairline)] bg-[var(--hairline)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px print-break-avoid">
        {HERO_HIGHLIGHTS.map((item) => (
          <div
            key={item.value}
            className="bg-[var(--surface)] px-6 py-5 flex flex-col justify-between"
          >
            <span className="text-xs font-medium text-[var(--ink-muted)]">
              {item.label}
            </span>
            <p className="font-editorial mt-2 text-2xl font-medium tracking-tight text-[var(--ink)] tabular-figures">
              {item.value}
            </p>
            <p className="font-mono mt-1.5 text-xs text-[var(--ink-secondary)] tabular-figures">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
