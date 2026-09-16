import { Article } from "@/components/Article";
import { physicians } from "@/lib/physicians";
import Quote from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Physicians and Writers",
  description:
    "Hippocrates, Celsus, Dioscorides, Pliny, Luke, and Ben Sira — the physicians and writers who framed healing in Jesus’s world.",
  path: "/physicians",
});

export default function Page() {
  return (
    <Article slug="physicians">
      <p>
        Medicine in this period is not a single school. It is an argument
        carried in Greek, Latin, Hebrew, and Aramaic. The names below are
        the ones this site leans on — some older authorities, some exact
        contemporaries, one famous successor who must not be back-dated.
      </p>

      <Quote cite="Celsus, De Medicina, on the surgeon (c. 30 AD)">
        He must have a strong, steady hand, which never trembles, and be no
        less ready to use the left hand than the right… compassionate, yet
        not so moved by cries that he cuts less than is necessary.
      </Quote>

      <div className="space-y-8">
        {physicians.map((person) => (
          <section key={person.id} className="border-t border-sand pt-6">
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
              {person.dates}
            </p>
            <h2 className="!mt-1">{person.name}</h2>
            <p className="font-display text-xl text-wine">{person.role}</p>
            <p>{person.summary}</p>
            <p className="text-ink-soft">{person.whyItMatters}</p>
          </section>
        ))}
      </div>

      <h2>Schools in collision</h2>
      <p>
        Later textbooks flatten this into “Galenic medicine.” In Jesus’s
        lifetime Galen is unborn. You could follow humoral balance, or
        Asclepiades’ pores-and-particles dietetics, or Methodist physicians
        who treated by “strictum and laxum” (tight and loose), or simply
        grandmother’s hyssop. Celsus is valuable because he reports the
        fight rather than pretending there is one orthodox clinic.
      </p>
      <p>
        Jewish writers add a theological layer without cancelling the
        clinic. Sirach’s physician prays for a right diagnosis. Luke can
        narrate both a hemorrhaging woman failed by doctors and a
        Samaritan’s oil and wine. The question was not “faith or herbs?”
        It was how those gifts sat together.
      </p>
    </Article>
  );
}
