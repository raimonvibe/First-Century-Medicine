import { Article } from "@/components/Article";
import { sources } from "@/lib/sources";
import { Callout } from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sources and Further Reading",
  description:
    "Ancient texts and modern scholarship behind this educational history of first-century medicine. Not a treatment guide.",
  path: "/sources",
});

export default function Page() {
  return (
    <Article slug="sources">
      <p>
        The playbook in this project folder set the ten original chapter
        themes. The pages you are reading add first-century voices that
        brief did not yet name in full — especially Celsus’s{" "}
        <em>De Medicina</em>, Dioscorides’ <em>De Materia Medica</em>,
        Sirach 38, and recent work on biblical medicinal plants.
      </p>
      <Callout title="Scope">
        <p>
          This is a teaching site, not a journal article. Quotations are
          rendered in clear modern English. Botanical identifications
          follow current scholarly caution: many “biblical plants” in older
          lists are mistranslations.
        </p>
      </Callout>
      {sources.map((group) => (
        <section key={group.group}>
          <h2>{group.group}</h2>
          <ul>
            {group.items.map((item) => (
              <li key={item.title}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-wine underline decoration-gold/60 underline-offset-4 hover:text-terracotta"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                ) : (
                  <strong>{item.title}</strong>
                )}
                <span className="block pt-1 text-ink-soft">{item.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Article>
  );
}
