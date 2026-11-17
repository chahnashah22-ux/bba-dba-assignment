import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Printer } from 'lucide-react';
import { PROFILE } from '../data/resumeData';

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = PROFILE.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="border-t border-[var(--hairline)] bg-[var(--surface-tint)] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs font-medium tracking-[0.04em] text-[var(--accent)] tabular-figures">
              05. Let&apos;s connect
            </p>
            <h2 className="font-editorial headline-balance mt-3 text-3xl sm:text-5xl font-normal tracking-[-0.02em] text-[var(--ink)]">
              {PROFILE.contactHeading}
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-[var(--ink-secondary)]">
              {PROFILE.contactSubcopy}
            </p>

            <div className="no-print mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 text-sm font-semibold text-white bg-[var(--accent)] rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[var(--accent-hover)]"
              >
                <span>Email me</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium text-[var(--ink)] border border-[var(--ink)]/25 bg-[var(--surface)] rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[var(--ink)] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium text-[var(--ink-secondary)] border border-[var(--hairline)] bg-[var(--surface)] rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[var(--ink-secondary)] hover:text-[var(--ink)] cursor-pointer"
              >
                <Printer className="h-4 w-4" aria-hidden="true" />
                <span>Print resume</span>
              </button>
            </div>

            <p className="font-mono mt-7 text-xs sm:text-sm text-[var(--ink-secondary)]">
              <a
                href={`mailto:${PROFILE.email}`}
                className="underline decoration-[var(--hairline)] underline-offset-4 transition-colors duration-150 hover:text-[var(--ink)] hover:decoration-[var(--accent)]"
              >
                {PROFILE.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--hairline)] bg-[var(--canvas)] py-7">
        <div className="mx-auto flex max-w-[1160px] flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-8 text-xs text-[var(--ink-muted)]">
          <p>{PROFILE.footerNote}</p>
          <a
            href="#home"
            className="no-print nav-link-underline text-[var(--ink-secondary)] transition-colors duration-150 hover:text-[var(--ink)] whitespace-nowrap shrink-0"
          >
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
