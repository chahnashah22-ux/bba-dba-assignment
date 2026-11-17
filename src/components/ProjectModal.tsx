import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { ExperienceItem } from '../data/resumeData';

interface ProjectModalProps {
  item: ExperienceItem | null;
  onClose: () => void;
}

export function ProjectModal({ item, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1c1d1a]/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl border border-[var(--hairline)] bg-[var(--surface)] p-6 sm:p-10 shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-[var(--hairline)] pb-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
              <span className="font-mono tabular-figures text-[var(--accent)] font-medium">
                {item.index}
              </span>
              <span aria-hidden="true">·</span>
              <span>{item.discipline}</span>
              <span aria-hidden="true">·</span>
              <span>{item.role}</span>
            </div>

            <h3
              id="project-modal-title"
              className="font-editorial headline-balance mt-2.5 text-2xl sm:text-3xl font-medium tracking-tight text-[var(--ink)]"
            >
              {item.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--hairline)] bg-[var(--canvas)] text-[var(--ink)] transition-colors duration-150 hover:border-[var(--ink)] hover:bg-[var(--surface-tint)] cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-xs font-semibold tracking-[0.02em] text-[var(--ink-muted)]">
              Overview
            </h4>
            <p className="mt-2 text-sm sm:text-base leading-[1.7] text-[var(--ink)]">
              {item.details.overview}
            </p>
          </div>

          <div className="border-t border-[var(--hairline)] pt-5">
            <h4 className="text-xs font-semibold tracking-[0.02em] text-[var(--ink-muted)]">
              Key Focus Areas
            </h4>
            <ul className="mt-3 space-y-2.5 text-sm leading-[1.65] text-[var(--ink-secondary)]">
              {item.details.focusAreas.map((point) => (
                <li key={point} className="flex items-baseline gap-3">
                  <span
                    className="font-mono text-xs text-[var(--accent)]"
                    aria-hidden="true"
                  >
                    —
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[var(--hairline)] pt-5">
            <h4 className="text-xs font-semibold tracking-[0.02em] text-[var(--ink-muted)]">
              Takeaway
            </h4>
            <p className="mt-2 text-sm leading-[1.65] text-[var(--ink-secondary)]">
              {item.details.learnings}
            </p>
          </div>

          <div className="border-t border-[var(--hairline)] pt-5 flex flex-wrap items-center justify-between gap-4">
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
              onClick={onClose}
              className="min-h-[40px] px-4 py-2 text-xs font-semibold text-white bg-[var(--accent)] rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[var(--accent-hover)] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
