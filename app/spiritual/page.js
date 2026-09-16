import { Article } from "@/components/Article";
import Quote, { Callout } from "@/components/Quote";

export const metadata = {
  title: "Faith, Prayer, and Healing",
  description:
    "Priests, physicians, Jesus’s healings, and how first-century people held body and spirit together.",
};

export default function Page() {
  return (
    <Article slug="spiritual">
      <p>
        First-century people did not walk around with our drawers labeled
        “medical,” “psychological,” and “religious.” Illness could be
        imbalance, sin, testing, uncleanness, bad air, or a demon — and
        more than one of those at once. A sensible family prayed, washed,
        sent for oil, and, if they could pay, sent for a physician.
        Ben Sira had already written that sequence.
      </p>

      <Quote cite="Sirach 38:9, 12–13">
        When you are ill, do not delay, but pray to the Lord… Then give
        physicians their place, for the Lord created them… There may come
        a time when recovery lies in the hands of physicians.
      </Quote>

      <h2>God as healer in Israel</h2>
      <p>
        The Psalms call the Lord the one who forgives and heals. Exodus
        remembers bitter water made sweet by wood — Sirach cites it as the
        prototype of earth-born medicine. None of that required hatred of
        doctors. It required that doctors not become a rival altar.
      </p>
      <p>
        Priests, meanwhile, ran a diagnostic theatre for skin. They did not
        compound senna. They decided whether someone could return to the
        camp. That is community medicine in vestments. Quarantine, washing,
        and re-entry rites structured fear so that it had an ending.
      </p>

      <h2>Jesus’s healings in that world</h2>
      <p>
        The Gospels present healings as signs of the kingdom, tied to
        faith, compassion, and authority. Sometimes there is touch, saliva,
        mud, a command to walk, a sending to the priest. Sometimes a word
        at a distance. The texts are not interested in competing with
        Celsus. They are interested in who Jesus is.
      </p>
      <p>
        They also assume ordinary medicine exists. The hemorrhaging woman
        has spent her living on physicians (Mark 5:26). Luke, “the beloved
        physician,” can tell that story without irony toward his own craft:
        the point is that this hemorrhage ends when others could not end
        it. Oil and wine on the Jericho road remain the model of neighbor
        love, not a rejected pagan technique.
      </p>

      <h2>Early Christian combination</h2>
      <ul>
        <li>
          James 5:14–15 — elders, prayer, oil, confession. Body and
          fellowship in one visit.
        </li>
        <li>
          1 Timothy 5:23 — wine as stomach medicine. Apostolic permission
          for a drug.
        </li>
        <li>
          1 Corinthians 6:19 — the body as a temple, which cuts against
          both neglect and gluttony.
        </li>
      </ul>

      <h2>Demons and other causes</h2>
      <p>
        Some conditions were named as possession. Exorcism was a public
        act. Not every fever was a demon; not every demon-story was a
        metaphor. The point for a historian is overlap: a household might
        try herbs for a seizure and a holy name for the same seizure. We
        do not have to accept every etiology to see that care was layered.
      </p>

      <Callout title="Four layers of care">
        <p>
          Physical treatment (herbs, diet, the knife). Spiritual treatment
          (prayer, repentance, ritual). Practical nursing (rest, washing,
          food). Community (family, alms, not leaving the melancholic
          alone). First-century healing is poorest when we keep only one
          layer and call the others superstition or, conversely, when we
          keep only miracle and forget the oil.
        </p>
      </Callout>
    </Article>
  );
}
