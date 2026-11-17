import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_ITEMS, type ExperienceItem } from '../data/resumeData';
import { ProjectModal } from './ProjectModal';

const MARQUEE_PHRASES = [
  'Entrepreneurship',
  'Brand Building',
  'Visual Storytelling',
  'Research & Interviews',
  'Art & Design',
  'Presentation Craft',
];

export function ExperienceSection() {
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  return (
    <>
      {/* Subtle editorial marquee ribbon divider */}
      <div
        aria-hidden="true"
        className="no-print marquee-wrapper overflow-hidden border-t border-[var(--hairline)] bg-[var(--surface-tint)] py-3.5"
      >
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex items-center gap-6 pr-6 text-xs font-medium tracking-[0.03em] text-[var(--ink-secondary)] whitespace-nowrap"
            >
              {MARQUEE_PHRASES.map((phrase) => (
                <span key={`${dup}-${phrase}`} className="inline-flex items-center gap-6">
                  <span>{phrase}</span>
                  <span className="text-[var(--accent)]">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section
        id="experience"
        className="mx-auto max-w-[1160px] px-5 sm:px-8 border-t border-[var(--hairline)] py-16 sm:py-20 lg:py-24"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.04em] text-[var(--accent)] tabular-figures">
              03. What I do
            </p>
            <h2 className="font-editorial headline-balance mt-3 text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-[var(--ink)]">
              Experience &amp; projects
            </h2>
          </div>

          <p className="no-print text-xs text-[var(--ink-muted)]">
            Select any work item to inspect details
          </p>
        </div>

        {/* 3-column architectural hairline showcase grid */}
        <div className="mt-10 border border-[var(--hairline)] bg-[var(--hairline)] grid grid-cols-1 lg:grid-cols-3 gap-px">
          {EXPERIENCE_ITEMS.map((item) => (
            <article
              key={item.id}
              className="bg-[var(--surface)] p-7 sm:p-8 flex flex-col justify-between transition-colors duration-150 hover:bg-[var(--canvas)] print-break-avoid"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
                    <span className="font-mono tabular-figures text-[var(--accent)] font-medium">
                      {item.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{item.discipline}</span>
                  </div>
                </div>

                <h3 className="font-editorial headline-balance mt-4 text-2xl font-medium tracking-tight text-[var(--ink)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.7] text-[var(--ink-secondary)]">
                  {item.summary}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[var(--hairline)] flex flex-col gap-4">
                {/* Zero-pill unboxed metadata with typographic separators */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
                  {item.tags.map((tag, idx) => (
                    <span key={tag} className="inline-flex items-center gap-2">
                      <span>{tag}</span>
                      {idx < item.tags.length - 1 && (
                        <span aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="no-print inline-flex items-center gap-1.5 self-start text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-150 cursor-pointer py-1"
                >
                  <span>Read case notes</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProjectModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
