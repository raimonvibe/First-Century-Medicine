import { Article } from "@/components/Article";
import HumorDiagram from "@/components/HumorDiagram";
import Quote, { Callout } from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Four Humors",
  description:
    "Blood, phlegm, yellow bile, and black bile: the four-humor theory first-century physicians used to explain health and disease.",
  path: "/humors",
});

export default function Page() {
  return (
    <Article slug="humors">
      <p>
        If you asked an educated physician in 30 AD why a person was ill,
        you would usually hear a story about fluids. Four of them — blood,
        phlegm, yellow bile, and black bile — were thought to compose the
        body. Health was proportion. Disease was a flood, a drought, or a
        misplacement of one humor.
      </p>
      <p>
        This was not folklore pretending to be philosophy. It was the
        dominant learned model of the Greco-Roman world, with roots in
        earlier Greek writing (especially the Hippocratic{" "}
        <em>On the Nature of Man</em>) and a long afterlife: it still
        shaped European medicine in the Renaissance. It lasted because it
        was visible. Anyone could see blood, mucus, and bile. Heat and
        cold, wet and dry, were felt every feverish night.
      </p>

      <h2>The four, at a glance</h2>
      <p>
        Select a humor. Each pairing of quality, season, element, and
        temperament gave the physician a script: cool the hot, dry the wet,
        warm the winter patient, calm the choleric.
      </p>
      <HumorDiagram />

      <h2>Why the model felt true</h2>
      <ul>
        <li>
          Fevers look like excess heat and often flush the face — “too much
          blood.”
        </li>
        <li>
          Winter coughs pour phlegm. Spices and steam seem to thin it.
        </li>
        <li>
          Vomiting can bring up bitter yellow. Anger comes with a burning
          gut.
        </li>
        <li>
          Depression and constipation can arrive together in a cold season
          — “black bile,” a humor more inferred than seen, but narratively
          powerful.
        </li>
      </ul>
      <p>
        Treatments were logical inside the system. Bleed the sanguine
        fever. Pepper the phlegmatic chest. Pour cold water on summer
        inflammation. Offer wine, music, and company to the melancholic.
        When the patient improved — as self-limited disease often does —
        the theory collected the credit.
      </p>

      <Quote cite="A caution from the same century">
        Not every physician agreed. Asclepiades of Bithynia had taught Rome
        that the body was particles and pores, and that baths, diet, and
        wine beat heroic purging. Celsus records both the mainstream and
        the dissent.
      </Quote>

      <h2>Temperament: character as physiology</h2>
      <p>
        Humoral language leaked into personality. A sanguine friend was
        convivial; a choleric official, sharp; a phlegmatic neighbor, slow
        to take offense; a melancholic scribe, exact and sad. The four
        temperaments outlived the clinic. They still haunt personality
        quizzes. In antiquity they were not metaphors. They were medical
        forecasts: this body will tend toward these diseases, and should
        eat this way in this season.
      </p>

      <Callout title="What the theory got right, accidentally">
        <p>
          Diet, season, sleep, and mood do affect health. Inflammation is
          hot and red. Mucus is wet. The error was to treat four fluids as
          the whole physics of the body. The useful habits — regimen,
          observation, not rushing to the knife — could survive the error.
          Bloodletting, the flagship intervention, generally could not.
        </p>
      </Callout>
    </Article>
  );
}
