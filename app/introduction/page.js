import { Article } from "@/components/Article";
import Quote, { Callout } from "@/components/Quote";

export const metadata = {
  title: "Medicine in the Time of Jesus",
  description:
    "Greek theory, Roman practice, and Judean healing during the lifetime of Jesus.",
};

export default function Page() {
  return (
    <Article slug="introduction">
      <p>
        Between about 6 BC and 33 AD — the usual scholarly window for
        Jesus’s lifetime — a sick person in the eastern Roman world did
        not enter a hospital ward. They sent for a household herbalist, a
        midwife, a travelling Greek-trained physician, a priest, or a holy
        man — sometimes all of them. What counted as “medicine” was a braid
        of Hippocratic theory, Roman practicality, Near Eastern pharmacy,
        and Jewish law.
      </p>
      <p>
        There were no germs in the story they told, no antibiotics on the
        shelf, no microscopes. There was, however, a long memory: which
        plants seemed to loosen the bowel, which resins quieted a wound,
        which waters cooled a fever. Observation and trial sat beside
        philosophy and prayer. That mix is not “primitive guesswork dressed
        as science.” It was the best systematic medicine the Mediterranean
        had.
      </p>

      <h2>Three inheritances</h2>
      <p>
        <strong>Greek thought</strong> supplied the prestige language.
        Physicians claimed descent from Hippocrates of Kos (fifth–fourth
        century BC). Health was a balance; disease a disturbance that could
        be read in fever, pulse, urine, and season. Diet, rest, and
        evacuation came before the knife.
      </p>
      <p>
        <strong>Roman application</strong> built baths, sewers, and army
        infirmaries, and wrote the techniques down. Aulus Cornelius Celsus,
        writing in Latin around the 30s AD — the same generation as Jesus’s
        public life — compiled diet, drugs, and surgery in{" "}
        <em>De Medicina</em>. He is the closest encyclopaedia we have to
        that decade.
      </p>
      <p>
        <strong>Local Judean practice</strong> never waited for a Greek
        textbook. Leviticus already isolated certain skin diseases and
        prescribed washing. The <em>mikveh</em> made ritual bathing ordinary.
        Jericho and Ein Gedi grew balsam so valuable that later Roman
        emperors treated the groves as treasure. Dead Sea bitumen and desert
        plants entered trade as drugs. Ben Sira, two centuries earlier, had
        already told Jewish readers to honor physicians because God made
        both the healer and the herb.
      </p>

      <Quote cite="The world of the Gospels">
        Luke is called “the beloved physician.” The Good Samaritan pours oil
        and wine on wounds. A woman spends her living on doctors and grows
        worse. None of these scenes assume that medicine is a pagan hobby.
      </Quote>

      <h2>Who treated the sick?</h2>
      <ul>
        <li>
          Elite Greek or Greek-trained physicians, often slaves or freedmen
          in Roman households, charging fees Pliny loved to resent.
        </li>
        <li>
          Root-cutters and drug-sellers — the people behind Dioscorides’
          later herbal — who knew plants by smell and season.
        </li>
        <li>
          Midwives, who owned childbirth until catastrophe invited a male
          surgeon.
        </li>
        <li>
          Priests, who did not set bones but did decide when a skin
          condition made someone “unclean.”
        </li>
        <li>
          Healers in the prophetic or charismatic sense, including Jesus,
          whose work the Gospels present as authority over body and spirit,
          not as a clinic competing for trade.
        </li>
      </ul>

      <h2>What they could and could not do</h2>
      <p>
        They could reduce a fever with water, drain an abscess, splint a
        limb, soothe a cough with honey, and — sometimes — keep a wound
        clean enough for the body to finish the job. They could not open
        the abdomen safely, stop epidemic infection as such, or see the
        creatures that caused it.
      </p>
      <p>
        When a treatment “worked,” several things might be true at once: the
        plant had a real compound; the illness was going to end anyway; rest
        and food mattered; the ritual of being attended to changed how the
        patient felt. First-century medicine is interesting because all of
        those can be true without our having to pretend that humoral theory
        was correct.
      </p>

      <Callout title="How to read this site">
        <p>
          Chapters move from the people and the land, through theory
          (humors, bleeding, baths), into the pharmacy (herbs, oils, food),
          then surgery, faith, and reconstructed case visits. A timeline,
          word list, and source list sit at the end. Nothing here is a recipe
          for use.
        </p>
      </Callout>
    </Article>
  );
}
