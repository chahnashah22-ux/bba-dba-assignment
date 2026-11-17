import { PROFILE } from '../data/resumeData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1160px] px-5 sm:px-8 border-t border-[var(--hairline)] py-16 sm:py-20 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs font-medium tracking-[0.04em] text-[var(--accent)] tabular-figures">
            01. About me
          </p>
          <h2 className="font-editorial headline-balance mt-3 text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-[var(--ink)]">
            {PROFILE.aboutHeading}
          </h2>
        </div>

        <div className="lg:col-span-8">
          <p className="editorial-dropcap max-w-[68ch] text-base sm:text-lg leading-[1.75] text-[var(--ink)]">
            {PROFILE.aboutLead}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[var(--hairline)] pt-8 print-break-avoid">
            {PROFILE.aboutPillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="text-sm font-semibold text-[var(--ink)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.65] text-[var(--ink-secondary)]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
