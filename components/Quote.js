export default function Quote({ children, cite }) {
  return (
    <blockquote className="my-10 overflow-hidden border-l-2 border-terracotta bg-parchment/50 px-4 py-5 sm:px-6">
      <p className="font-display text-xl leading-snug text-olive italic sm:text-2xl">
        {children}
      </p>
      {cite ? (
        <footer className="mt-3 font-sans text-[0.65rem] uppercase tracking-[0.12em] text-ink-soft sm:text-xs sm:tracking-[0.18em]">
          {cite}
        </footer>
      ) : null}
    </blockquote>
  );
}

export function Callout({ title, children }) {
  return (
    <aside className="my-8 rounded-sm border border-sand bg-cream px-4 py-4 sm:px-5">
      {title ? (
        <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.22em] text-terracotta">
          {title}
        </p>
      ) : null}
      <div className="text-[0.98rem] leading-relaxed text-ink-soft">{children}</div>
    </aside>
  );
}

export function DisclaimerBanner() {
  return (
    <p
      data-speech-include="true"
      className="border-b border-sand bg-parchment/80 px-3 py-2 text-center font-sans text-[0.7rem] leading-relaxed text-ink-soft sm:px-4 sm:text-xs"
    >
      Educational history of first-century medicine — not a guide for treating
      illness today.
    </p>
  );
}
