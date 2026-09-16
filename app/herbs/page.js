import { Article } from "@/components/Article";
import HerbExplorer from "@/components/HerbExplorer";
import Quote, { Callout } from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Herbs and Plant Medicines",
  description:
    "Explore balsam, myrrh, hyssop, fig, and other first-century plant medicines. An educational materia medica, not a dispensary.",
  path: "/herbs",
});

export default function Page() {
  return (
    <Article slug="herbs">
      <p>
        Theory talked in humors. Practice talked in plants. Pedanius
        Dioscorides, a Greek army physician writing a generation after
        Jesus (c. 50–70 AD), listed some six hundred medicinal plants and a
        thousand preparations. He had studied at Tarsus and travelled as
        far as Petra. His <em>De Materia Medica</em> is the period’s
        pharmacy shelf, even when a Galilean household only owned a dozen
        of those items.
      </p>
      <p>
        Plants were sorted as hot or cold, wet or dry, so they could be
        aimed at an imbalance. Under that grid sat older Near Eastern
        knowledge — Egyptian and Mesopotamian uses of myrrh, garlic, and
        pomegranate — and the five species the Bible itself treats as
        medicine: fig, nard, hyssop, balm of Gilead, and mandrake.
      </p>

      <Quote cite="Sirach 38:4, 7–8">
        The Lord created medicines out of the earth… By them the physician
        heals and takes away pain; the pharmacist makes a mixture from them.
      </Quote>

      <Callout title="Read as history">
        <p>
          Several of these substances are toxic (mandrake), violently
          purgative (senna, aloe latex), or simply not for home experiment.
          The explorer below is a museum case, not a dispensary.
        </p>
      </Callout>

      <h2>Explore the remedies</h2>
      <p>
        Filter by Scripture, by local versus imported, or by the complaint
        a first-century healer might name. Open a card for period use and
        what modern chemistry can fairly say.
      </p>
      <HerbExplorer />
    </Article>
  );
}
