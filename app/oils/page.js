import { Article } from "@/components/Article";
import Quote, { Callout } from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Oils, Salves, and Poultices",
  description:
    "Olive oil, aromatic resins, mustard plasters, and anointing — how first-century medicine entered the skin and the rite.",
  path: "/oils",
});

export default function Page() {
  return (
    <Article slug="oils">
      <p>
        Much of ancient pharmacy never went down the throat. It went on the
        skin. Olive oil was the default vehicle: food, lamp fuel, wrestler’s
        scrape, and the base of almost every salve. Add beeswax and you
        have an ointment that stays put. Add a resin and you have a perfume
        that counted as medicine because fragrance was thought to penetrate
        and to purify.
      </p>

      <h2>Anointing as more than metaphor</h2>
      <p>
        To pour oil is to honor, to consecrate, and to treat. Kings are
        anointed; so are the sick. James 5:14 tells the church to call
        elders to pray and anoint. The Good Samaritan’s oil (with wine)
        is first aid. Celsus oils the weary traveller as a matter of
        course. The same jar can be liturgical and clinical before anyone
        splits those categories.
      </p>

      <Quote cite="Luke 10:34">
        He went to him and bound up his wounds, pouring on oil and wine.
      </Quote>

      <h2>How a salve was built</h2>
      <ul>
        <li>Oil — usually olive; sometimes other pressed fruits.</li>
        <li>Herb juices or powdered leaves, strained or mashed in.</li>
        <li>Resins: myrrh, balsam, mastic, frankincense.</li>
        <li>Animal fat when oil was scarce or a stiffer paste was wanted.</li>
        <li>Beeswax for body and a little resistance to heat.</li>
      </ul>
      <p>
        Aromatic oils of cinnamon, cardamom, and local mints were valued
        for warmth, smell, and the belief that they carried drug into the
        flesh. Massage was not a spa extra. It was how you moved a humor
        and eased a joint.
      </p>

      <h2>Poultices and plasters</h2>
      <p>
        A poultice is a wet mash bound on with cloth. Hezekiah’s fig
        plaster (2 Kings 20:7) is the biblical type. Mustard plasters
        burned on purpose: counter-irritation, a surface fire to stir
        blood in a cold joint or tight chest. Drawing plasters were meant
        to pull pus or venom; the pulling is mostly story, the heat and
        moisture sometimes useful.
      </p>
      <p>
        Honey on linen is the dressing that still impresses microbiologists:
        sugar, acidity, and slow peroxide. Balsam and myrrh on wounds were
        the expensive version of the same instinct — put something clean
        and hostile to rot against the cut.
      </p>

      <Callout title="Why topical care was wise">
        <p>
          You can see the target. You can stop if the skin blisters. You
          swallow fewer unknowns. In a world without dose-measured alkaloids,
          that conservatism saved lives even when the theory (“draw the
          humor through the pores”) was scenery.
        </p>
      </Callout>
    </Article>
  );
}
