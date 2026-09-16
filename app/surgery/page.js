import { Article } from "@/components/Article";
import Quote, { Callout } from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Surgery and Wound Care",
  description:
    "Celsus on inflammation, ligature, bone-setting, and cautery — what first-century surgery could do, and what it could not.",
  path: "/surgery",
});

export default function Page() {
  return (
    <Article slug="surgery">
      <p>
        Surgery in this century is hands, knives, fire, and speed. There
        is no reliable general anesthetic. Wine is the usual courage.
        Mandrake and opium exist in the wider materia medica; how often
        they appeared in a Judean village is guesswork. The operator who
        finished quickly was merciful by definition.
      </p>
      <p>
        Celsus, writing in Jesus’s generation, is startlingly concrete. He
        names the four signs of inflammation — redness, swelling, heat, and
        pain — a tetrad still taught in medical schools. He describes tying
        vessels to stop bleeding (ligature), aiming for wounds to heal
        cleanly, setting bones, cutting for stone, and repairing hernia.
        Later ages forgot some of this excellence and then rediscovered it.
      </p>

      <Quote cite="Celsus, De Medicina">
        Now the signs of an inflammation are four: redness and swelling
        with heat and pain.
      </Quote>

      <h2>Everyday operations</h2>
      <h3>Lancing and bleeding</h3>
      <p>
        Opening an abscess is true surgery and often wise: pus under
        pressure is a modern indication too. Opening a vein is the humoral
        cousin, far more often done, far less well justified.
      </p>
      <h3>Wounds</h3>
      <p>
        Wash (water, wine), press or cauterize to stop blood, stitch if
        the edges will meet, bandage with clean cloth, apply honey or
        resin. Celsus knows that fever after a small wound is a bad sign —
        systemic infection, in our terms. He cannot name bacteria. He can
        watch the mind, the rigor, the delirium.
      </p>
      <h3>Cautery</h3>
      <p>
        A hot iron seals a bleeder or burns rotten tissue. It smells like
        what it is. It sometimes stops a local disaster. It is not a
        treatment anyone volunteered for twice.
      </p>
      <h3>Bones and teeth</h3>
      <p>
        Reduction and splints: art plus experience. A poor set is a
        lifelong map of the accident. Teeth came out with pliers. Infection
        followed as a tax.
      </p>
      <h3>Amputation</h3>
      <p>
        Last resort for a dead limb. Cautery for bleeding. Shock and
        infection killed many who “survived” the cut. Sometimes it was
        still the only chance.
      </p>

      <h2>What they would not open</h2>
      <p>
        The chest and belly were almost closed countries. Elective internal
        surgery on a living patient was not the village craft. Lithotomy
        and some specialist operations existed in skilled centers —
        Alexandria’s shadow, Rome’s specialists such as Meges of Sidon —
        not in every market town. Most deep injuries were a sentence.
      </p>

      <h2>Cleanliness without germs</h2>
      <p>
        Jewish washing, a preference for unused cloth, wine on the cut,
        honey’s hostility to rot: these are antisepsis by luck and
        observation. Dirty hands were not understood as a mechanism, but
        some practitioners noticed that filth went with disaster. There was
        no ritual of sterility as a theatre nurse would know it.
      </p>

      <Callout title="Pain">
        <p>
          Celsus wants a surgeon young enough to be steady, ambidextrous,
          sharp-eyed, and kind without being kind enough to stop early.
          That sentence is the whole anesthetic problem in one moral:
          the patient will scream; the work must still be complete.
        </p>
      </Callout>
    </Article>
  );
}
