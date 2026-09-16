export default function Quote({ children, cite }) {
  return (
    <blockquote className="my-10 border-l-2 border-terracotta bg-parchment/50 px-6 py-5">
      <p className="font-display text-2xl leading-snug text-olive italic">
        {children}
      </p>
      {cite ? (
        <footer className="mt-3 font-sans text-xs uppercase tracking-[0.18em] text-ink-soft">
          {cite}
        </footer>
      ) : null}
    </blockquote>
  );
}

export function Callout({ title, children }) {
  return (
    <aside className="my-8 rounded-sm border border-sand bg-cream px-5 py-4">
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
      className="border-b border-sand bg-parchment/80 px-4 py-2 text-center font-sans text-xs leading-relaxed text-ink-soft"
    >
      Educational history of first-century medicine — not a guide for treating
      illness today.
    </p>
  );
}
