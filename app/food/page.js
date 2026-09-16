import { Article } from "@/components/Article";
import Quote, { Callout } from "@/components/Quote";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Food as Medicine",
  description:
    "Wine, honey, grains, and fasting as treatment: humoral diet in the first-century Mediterranean kitchen and clinic.",
  path: "/food",
});

export default function Page() {
  return (
    <Article slug="food">
      <p>
        Learned medicine did not draw a hard line between supper and a
        dose. Regimen — food, wine, exercise, sleep — was the first
        prescription. Celsus spends book after book on what to eat when
        you are well and when you are not. A Galilean table was simpler
        than a Roman encyclopaedia, but it still carried medical meaning:
        wine for the stomach, honey for the throat, garlic for the chest.
      </p>

      <h2>Jewish diet as an accidental shield</h2>
      <p>
        Torah’s food laws are about holiness, not germ theory. They
        nevertheless reduced some risks. Avoiding pork lowered exposure to
        certain parasites. Slaughter rules and waiting periods around
        blood were not HACCP, but they were rules. Fasting, communal and
        personal, emptied the gut and marked repentance. Physicians could
        borrow the emptiness and call it a purge.
      </p>

      <Quote cite="1 Timothy 5:23">
        No longer drink only water, but take a little wine for the sake of
        your stomach and your frequent ailments.
      </Quote>

      <h2>The pantry as pharmacy</h2>
      <h3>Wine</h3>
      <p>
        The default drug. Warm and moist in humoral tables; a digestive;
        a pain duller; a wound wash. “A little” is the ethical dose. The
        historical dose often crept. Dilution with water was civilized
        practice and safer in cities where water alone could be worse.
      </p>
      <h3>Honey</h3>
      <p>
        Calories, cough syrup, and the best topical antiseptic they owned.
        Costly. Mixed into bitter roots so patients would swallow.
      </p>
      <h3>Bread and grains</h3>
      <p>
        Strength and blood, in their language. Barley gruel for the
        feverish; heavier bread for recovery. Whole grain had prestige in
        some dietetics as less refined, closer to nature’s heat.
      </p>
      <h3>Legumes</h3>
      <p>
        Lentils, beans, and chickpeas built the poor. Classed as warming
        and drying — good for phlegm, sometimes blamed for wind.
      </p>
      <h3>Fruit</h3>
      <p>
        Grapes, figs, dates, pomegranates, apples: generally cooling and
        moistening, hence fever food. Dried fruit carried the orchard into
        winter. Grapes sat near wine in esteem.
      </p>
      <h3>Garden and spice</h3>
      <p>
        Onion and garlic as household antibiotics-before-the-word. Lettuce
        as cooling. Cumin, dill, and mint — the herbs Jesus names in a
        tithing rebuke — as carminatives. Imported ginger and cinnamon as
        winter heat for those who could pay.
      </p>

      <h2>Matching the dish to the diagnosis</h2>
      <ul>
        <li>Hot diseases: fruit, light grain, less wine, cool rooms.</li>
        <li>Cold diseases: spices, broths, oil, diluted wine, motion.</li>
        <li>Recovery: meat broths and richer food if the gut would take them.</li>
        <li>
          Melancholy: not only diet — company and music — but warming,
          appealing plates so the patient would eat at all.
        </li>
      </ul>

      <Callout title="The sound instinct">
        <p>
          Malnutrition delays healing. Alcohol in small amounts with food
          can ease a nervous stomach; in large amounts it is another
          disease. Honey soothes. Garlic is not nothing. The humoral menu
          was a way of taking food seriously. That seriousness outranks the
          four-fluid chart.
        </p>
      </Callout>
    </Article>
  );
}
