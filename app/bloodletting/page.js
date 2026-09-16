import { Article } from "@/components/Article";
import Quote, { Callout } from "@/components/Quote";

export const metadata = {
  title: "Bloodletting and Venesection",
  description:
    "Why first-century physicians opened veins, used leeches, and cupped the skin.",
};

export default function Page() {
  return (
    <Article slug="bloodletting">
      <p>
        If humoral theory was the map, bloodletting was the main road.
        Excess blood explained fever, flush, headache, and a dozen acute
        illnesses. Removing blood was supposed to cool the body and restore
        proportion. The practice was already old in 30 AD and would remain
        respectable in Europe until the nineteenth century. That longevity
        is a warning about how long a coherent error can live.
      </p>

      <h2>Three ways to take blood</h2>
      <h3>Venesection (phlebotomy)</h3>
      <p>
        A lancet opened a vein, usually in the arm. The amount was judged
        by age, strength, season, and disease. Celsus notes that bleeding
        the young, the old, and the pregnant had once been forbidden, then
        became more common — he is not a mindless enthusiast. He still
        treats venesection as a general aid in many illnesses.
      </p>
      <h3>Leeches</h3>
      <p>
        Medicinal leeches did the measuring themselves. They were useful
        where a knife felt too bold, or where a local “drawing” was wanted
        rather than a stream from the elbow.
      </p>
      <h3>Cupping</h3>
      <p>
        A heated cup sucked skin upward. Dry cupping raised a bruise. Wet
        cupping added small cuts so blood entered the cup. The idea was to
        pull peccant matter to a chosen spot — including, in some recipes,
        toward the surface and out.
      </p>

      <Quote cite="Celsus, De Medicina">
        To let blood by incising a vein is no novelty; what is novel is that
        there should be scarcely any malady in which blood may not be let.
      </Quote>

      <h2>When they reached for the lancet</h2>
      <ul>
        <li>Fevers and inflammations (hot, red, full pulse).</li>
        <li>Headaches thought to come from blood crowding the head.</li>
        <li>Sanguine excess — the person “too full.”</li>
        <li>
          Sometimes melancholy, on the theory that dark humors rode in the
          blood — a stretch even then, and cruel in the frail.
        </li>
      </ul>
      <p>
        Location mattered in the more elaborate schemes: bleed here for the
        chest, there for the temples. The more precise the map, the more
        scientific it felt.
      </p>

      <h2>Why it seemed to work</h2>
      <p>
        A feverish patient may feel a brief coolness after losing blood.
        Many acute diseases end in a few days regardless. The physician who
        had done something dramatic was easy to credit. Failures could be
        narrated as “too little,” “too late,” or “the wrong day.” The
        theory was closed: it could not falsify itself.
      </p>
      <p>
        The cost was real. Weak patients were made weaker. Wounds
        infected. Occasional deaths were absorbed into the same story.
        Celsus’s caution about children is the humane note in a dangerous
        habit.
      </p>

      <Callout title="Arteriotomy">
        <p>
          Some operators went further and opened arteries, including for
          chronic eye fluxes — Celsus describes incisions on the scalp and
          even cautery of bone. This is surgery wearing the mask of
          humoral drainage. It shows how far “letting blood” could run
          beyond a tidy nick at the elbow.
        </p>
      </Callout>
    </Article>
  );
}
