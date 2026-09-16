import PageHeader, { ChapterNav } from "@/components/PageHeader";

export function Article({ slug, children }) {
  return (
    <>
      <PageHeader slug={slug} />
      <article
        id="content"
        className="prose-page mx-auto max-w-3xl px-4 pb-4 md:px-6"
      >
        {children}
      </article>
      <ChapterNav slug={slug} />
    </>
  );
}
