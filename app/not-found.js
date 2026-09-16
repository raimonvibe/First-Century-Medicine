import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="font-sans text-xs uppercase tracking-[0.28em] text-gold">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl text-olive">
        This page is not in the herbal
      </h1>
      <p className="mt-4 text-ink-soft">
        The leaf you wanted is missing. Return to the course or open the
        remedy list.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/" className="bg-olive px-4 py-2 font-sans text-sm text-cream">
          Home
        </Link>
        <Link
          href="/herbs"
          className="border border-olive px-4 py-2 font-sans text-sm text-olive"
        >
          Herbs
        </Link>
      </div>
    </div>
  );
}
