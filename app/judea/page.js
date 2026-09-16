import { Article } from "@/components/Article";
import Quote, { Callout } from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Healing in Judea",
  description:
    "Balsam gardens, Dead Sea bitumen, the mikveh, and Levitical purity laws made first-century Judea a distinctive medical landscape.",
  path: "/judea",
});

export default function Page() {
  return (
    <Article slug="judea">
      <p>
        Judea was not a medical backwater waiting for Rome to arrive with
        science. It exported drugs, washed according to Torah, and argued
        about physicians in Scripture itself. A Galilean village and a
        Jerusalem street did not look like the Palatine, but they were
        plugged into the same balsam, bitumen, and spice routes.
      </p>

      <h2>The balsam economy</h2>
      <p>
        Ancient writers — Pliny, Josephus, Strabo, Dioscorides — treat
        Judean balsam as almost unique. The shrubs were cultivated in
        guarded gardens near Jericho and along the Dead Sea, including Ein
        Gedi. The resin, wood, and fruit were graded like wine. After the
        war of 66–70 AD, the plantations became imperial income. Galen, a
        century later, still travelled to learn the drug on the spot.
      </p>
      <p>
        Jeremiah’s “balm in Gilead” is older poetry, but first-century
        hearers would not have found the image exotic. Healing gum was a
        local industry. That matters: Second Temple Jews were not
        instinctively hostile to materia medica. They grew it for the world.
      </p>

      <h2>Other products of the rift</h2>
      <ul>
        <li>
          Dead Sea bitumen, used in preparations and trade — a mineral
          cousin to plant resins.
        </li>
        <li>
          Lye-yielding saltbush (<em>Atriplex halimus</em>), part of the
          region’s reputation for cleansing substances.
        </li>
        <li>
          Dates of Jericho, both food and restorative; a valley of sugar
          before cane sugar.
        </li>
        <li>
          Hyssop on the hills, figs in every courtyard, olive oil in every
          lamp.
        </li>
      </ul>

      <Quote cite="A modern scholarly correction">
        Only five plants are named as medicines in the Bible itself: fig,
        nard, hyssop, balm of Gilead, and mandrake. Many more were used.
        The shorter list is about what the text bothers to call medicine —
        not about an empty hillside.
      </Quote>

      <h2>Purity as public health</h2>
      <p>
        Leviticus 13–15 is priestly, not Hippocratic. A priest inspects
        color, depth, and spread of skin disease (<em>tzara’at</em>, a
        wider term than Hansen’s disease). He quarantines, re-examines, and
        declares clean. Fluxes, corpses, and childbirth have their own
        washings and waiting periods. The stated aim is holiness. The
        side-effect is isolation of some contagious conditions and a
        culture of bathing.
      </p>
      <p>
        The <em>mikveh</em> — a pool of “living” water — marked return to
        community. It is not a Roman <em>therma</em>. No caldarium, no
        oiling-room gossip. Yet a people who already washed for God were
        not strangers to water as a technology of the body. Medical bathing
        and ritual bathing could occupy the same week without occupying the
        same meaning.
      </p>

      <h2>Physicians in Jewish memory</h2>
      <p>
        King Asa is blamed in Chronicles for seeking physicians instead of
        the Lord — a text that later readers used to suspect doctors. Ben
        Sira answers that suspicion in advance: pray, repent, <em>then</em>{" "}
        give the physician his place, for recovery may lie in his hands,
        and he too prays. Qumran and Josephus show groups (including
        Essenes) interested in roots and healing lore. The old picture of
        “Jews versus medicine” does not survive the evidence of trade or
        of Sirach 38.
      </p>

      <Callout title="Jesus in this landscape">
        <p>
          Gospel healings happen among people who already know doctors,
          oil, saliva pastes, and priestly certificates. When Jesus sends a
          cleansed man to the priest, he is not inventing the public-health
          bureaucracy of Leviticus. He is stepping into it. The claim of
          the texts is authority, not the absence of a medical culture.
        </p>
      </Callout>
    </Article>
  );
}
