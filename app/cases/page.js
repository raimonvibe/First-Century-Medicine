import { Article } from "@/components/Article";
import CaseList from "@/components/CaseList";
import { Callout } from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Ten Cases from the First Century",
  description:
    "Ten reconstructed first-century visits — fever, wounds, fracture, childbirth, and melancholy — with a modern reading of each.",
  path: "/cases",
});

export default function Page() {
  return (
    <Article slug="cases">
      <p>
        These visits are imagined, not excavated from a named patient’s
        tomb. They follow Celsus, Dioscorides, household pharmacy, and
        Jewish practice closely enough to be fair, and they label the
        guesswork. Open a case for the period plan and a modern reading.
      </p>
      <Callout title="Not case notes to copy">
        <p>
          Bloodletting, cautery, and mandrake belong in the story. They do
          not belong in anyone’s kitchen. The value is seeing how a coherent
          physician would think — and where that thinking helped or harmed.
        </p>
      </Callout>
      <CaseList />
    </Article>
  );
}
