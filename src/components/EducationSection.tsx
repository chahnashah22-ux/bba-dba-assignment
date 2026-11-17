import { useState } from 'react';
import { EDUCATION_ITEMS, type EducationCategory } from '../data/resumeData';

const FILTERS: { key: EducationCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'undergraduate', label: 'Undergraduate' },
  { key: 'schooling', label: 'Schooling' },
];

export function EducationSection() {
  const [activeCategory, setActiveCategory] = useState<EducationCategory>('all');

  const visibleItems =
    activeCategory === 'all'
      ? EDUCATION_ITEMS
      : EDUCATION_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="education"
      className="mx-auto max-w-[1160px] px-5 sm:px-8 border-t border-[var(--hairline)] py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.04em] text-[var(--accent)] tabular-figures">
            02. Academic journey
          </p>
          <h2 className="font-editorial headline-balance mt-3 text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-[var(--ink)]">
            Education
          </h2>
        </div>

        {/* Interactive segmented filter */}
        <div
          role="group"
          aria-label="Filter education records"
          className="no-print inline-flex items-center gap-1 p-1 border border-[var(--hairline)] bg-[var(--surface-tint)] rounded-sm self-start sm:self-auto"
        >
          {FILTERS.map((filter) => {
            const isActive = activeCategory === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(filter.key)}
                className={`min-h-[36px] px-3.5 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--surface)] text-[var(--ink)] shadow-xs'
                    : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Architectural 1px hairline CSS grid matrix */}
      <div className="mt-10 border border-[var(--hairline)] bg-[var(--hairline)] grid grid-cols-1 md:grid-cols-2 gap-px">
        {visibleItems.map((item) => (
          <article
            key={item.id}
            className="bg-[var(--surface)] p-7 sm:p-9 flex flex-col justify-between print-break-avoid"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
                <span className="font-mono tabular-figures text-[var(--accent)] font-medium">
                  {item.period}
                </span>
                <span aria-hidden="true">·</span>
                <span>{item.categoryLabel}</span>
              </div>

              <h3 className="font-editorial mt-3 text-2xl font-medium tracking-tight text-[var(--ink)]">
                {item.institution}
              </h3>

              <p className="mt-1.5 text-sm font-medium text-[var(--ink-secondary)]">
                {item.credential}
              </p>

              <p className="mt-4 text-sm leading-[1.65] text-[var(--ink-secondary)]">
                {item.summary}
              </p>
            </div>

            {item.highlight && (
              <div className="mt-6 pt-4 border-t border-[var(--hairline)]">
                <span className="font-mono text-xs font-medium text-[var(--ink)] tabular-figures">
                  {item.highlight}
                </span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
