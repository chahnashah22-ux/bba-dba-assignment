import { useState } from 'react';
import { CAPABILITY_ITEMS, type SkillCategory } from '../data/resumeData';

const SKILL_FILTERS: { key: SkillCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'design', label: 'Design' },
  { key: 'analytical', label: 'Analytical' },
  { key: 'communication', label: 'Communication' },
];

export function CapabilitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const visibleSkills =
    selectedCategory === 'all'
      ? CAPABILITY_ITEMS
      : CAPABILITY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="capabilities"
      className="mx-auto max-w-[1160px] px-5 sm:px-8 border-t border-[var(--hairline)] py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.04em] text-[var(--accent)] tabular-figures">
            04. Capabilities
          </p>
          <h2 className="font-editorial headline-balance mt-3 text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-[var(--ink)]">
            Skills &amp; toolkit
          </h2>
        </div>

        {/* Interactive filter bar */}
        <div
          role="group"
          aria-label="Filter skills by discipline"
          className="no-print inline-flex flex-wrap items-center gap-1 p-1 border border-[var(--hairline)] bg-[var(--surface-tint)] rounded-sm self-start sm:self-auto"
        >
          {SKILL_FILTERS.map((filter) => {
            const isActive = selectedCategory === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(filter.key)}
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

      {/* 3-column architectural hairline CSS Grid */}
      <div className="mt-10 border border-[var(--hairline)] bg-[var(--hairline)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        {visibleSkills.map((skill) => (
          <div
            key={skill.id}
            className="bg-[var(--surface)] p-7 flex flex-col justify-between print-break-avoid"
          >
            <div>
              <div className="flex items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
                <span className="font-mono tabular-figures text-[var(--accent)] font-medium">
                  {skill.index}
                </span>
                <span>{skill.categoryLabel}</span>
              </div>

              <h3 className="font-editorial mt-3 text-xl font-medium tracking-tight text-[var(--ink)]">
                {skill.name}
              </h3>

              <p className="mt-2.5 text-sm leading-[1.65] text-[var(--ink-secondary)]">
                {skill.application}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
