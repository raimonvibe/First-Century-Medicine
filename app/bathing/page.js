import { Article } from "@/components/Article";
import Quote, { Callout } from "@/components/Quote";

export const metadata = {
  title: "Water, Heat, and Cold",
  description:
    "Roman baths, Jewish ritual washing, and prescribed hot and cold therapy.",
};

export default function Page() {
  return (
    <Article slug="bathing">
      <p>
        Water was the gentlest of the great therapies, and the one that
        most often helped. Heat loosens muscle and opens what the ancients
        called pores. Cold checks swelling. Clean water removes dirt that
        would otherwise sit in a wound. None of that required a correct
        theory of humors — but humoral language gave bathing a
        prescription pad.
      </p>

      <h2>The Roman sequence</h2>
      <p>
        A city bath was a machine for moving the body through temperatures:
        warm tepidarium, hot caldarium, cold frigidarium, with oiling and
        scraping (strigil) in between. Celsus turns this civic pleasure
        into medicine. The fatigued should sit in warmth, descend into
        tubs, be oiled, and sometimes finish with cold on the face. A
        near-feverish exhaustion gets a milder hip bath with a little oil
        in the water — not a blast of heat.
      </p>
      <p>
        Steam and sweat were thought to thin humors and let them escape.
        That is wrong as physics and occasionally right as comfort. For
        joint pain and worry, a warm room is still a treatment.
      </p>

      <div className="my-8 grid grid-cols-3 border border-sand text-center font-sans text-xs uppercase tracking-[0.14em]">
        <div className="bg-[#d7e3ea] px-2 py-6 text-olive">
          Frigidarium
          <span className="mt-2 block font-serif text-sm normal-case tracking-normal text-ink-soft">
            Cold plunge
          </span>
        </div>
        <div className="bg-parchment px-2 py-6 text-olive">
          Tepidarium
          <span className="mt-2 block font-serif text-sm normal-case tracking-normal text-ink-soft">
            Warm rest
          </span>
        </div>
        <div className="bg-[#e8c4a8] px-2 py-6 text-olive">
          Caldarium
          <span className="mt-2 block font-serif text-sm normal-case tracking-normal text-ink-soft">
            Hot room
          </span>
        </div>
      </div>

      <h2>Cold as a drug</h2>
      <p>
        Inflammation, in Celsus’s famous four signs, is red, swollen, hot,
        and painful. Cooling the surface is a rational reply. Cold cloths
        for headache, cool rooms for fever, restricted hot baths while the
        heat of disease is still climbing: the regimen is more nuanced than
        “ancients boiled the sick.”
      </p>
      <p>
        Matching heat with heat — plunging a feverish patient into hot
        water because the disease is hot — also appears. That is the theory
        overplaying its hand. The better writers watch the patient, not
        only the slogan.
      </p>

      <Quote cite="Jewish practice, medical neighbor">
        Ritual immersion in a mikveh is about purity before God, not a
        prescription for rheumatism. Still, a culture of washing is a
        medical fact. Levitical isolation of certain skin diseases is
        another: holiness with a quarantine diagram.
      </Quote>

      <h2>How long, how often</h2>
      <p>
        A physician might order morning and evening bathing for weeks.
        Duration and temperature tracked the diagnosis: longer heat for
        cold-wet phlegm; shorter, cooler visits for hot-dry bile. Oil after
        water kept the “moist” in and the skin from cracking — also simply
        pleasant in a dry climate.
      </p>

      <Callout title="What still holds">
        <p>
          Warmth for stiffness, cold for fresh swelling, cleanliness for
          wounds, and not shocking a weak body with extremes. The Roman
          bath was overbuilt for these truths. The village basin was
          enough, if the water was clean enough — a condition ancient
          cities did not always meet.
        </p>
      </Callout>
    </Article>
  );
}
