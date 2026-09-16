export const conditions = [
  "wounds",
  "digestion",
  "respiratory",
  "pain",
  "skin",
  "fever",
  "sleep",
  "women's health",
  "infection",
  "eyes",
];

export const herbs = [
  {
    id: "balm-of-gilead",
    name: "Balm of Gilead",
    latin: "Commiphora gileadensis",
    humoral: ["hot", "dry"],
    availability: "local luxury",
    biblical: true,
    conditions: ["wounds", "skin", "respiratory", "digestion"],
    summary:
      "The most famous Judean medicine. Aromatic resin from balsam shrubs cultivated in royal gardens near Jericho and Ein Gedi.",
    uses: "Wounds, skin complaints, cough and chest tightness, digestive gripes, and as a costly antidote. Pliny and Dioscorides both praised it.",
    properties:
      "Modern chemistry finds related Commiphora resins contain anti-inflammatory and mildly antimicrobial compounds. The ancient fame was also political: after 70 AD the groves became imperial Roman revenue.",
    note: "Jeremiah’s question — “Is there no balm in Gilead?” — already treated the resin as a proverb for healing.",
  },
  {
    id: "myrrh",
    name: "Myrrh",
    latin: "Commiphora myrrha",
    humoral: ["hot", "dry"],
    availability: "imported",
    biblical: true,
    conditions: ["wounds", "pain", "infection", "respiratory"],
    summary:
      "A bitter resin from Arabia and the Horn of Africa, used as incense, perfume, wound salve, and burial spice.",
    uses: "Mixed into ointments for sores; chewed or drunk in wine for pain; burned as fragrance associated with holiness and healing. Nicodemus brought myrrh and aloes for Jesus’s burial (John 19:39).",
    properties:
      "Contains sesquiterpenes with documented analgesic and antimicrobial activity. Costly enough to be a gift fit for a king (Matthew 2:11).",
    note: "Letters from Late Bronze Age Gezer already request myrrh from Egypt for healing — the trade is older than the Gospels.",
  },
  {
    id: "frankincense",
    name: "Frankincense",
    latin: "Boswellia spp.",
    humoral: ["hot", "dry"],
    availability: "imported",
    biblical: true,
    conditions: ["respiratory", "pain", "skin"],
    summary:
      "Olibanum resin burned in Temple incense and used medicinally for swelling, cough, and wounds.",
    uses: "Fumigation, plasters, and internal recipes in Greek and Near Eastern pharmacy. Temple compounding (Exodus 30) mixed it with other aromatics.",
    properties:
      "Boswellic acids have anti-inflammatory effects studied today. In the first century the value was smell, rarity, and the belief that fragrant smoke purified air and body.",
    note: "A luxury of the incense road; not a village herb.",
  },
  {
    id: "hyssop",
    name: "Hyssop (Syrian oregano)",
    latin: "Origanum syriacum",
    humoral: ["hot", "dry"],
    availability: "local",
    biblical: true,
    conditions: ["respiratory", "infection", "skin"],
    summary:
      "The biblical ezov is widely identified with Syrian hyssop, a thyme-scented herb of rocky Judean hills — not European Hyssopus.",
    uses: "Ritual sprinkling (Passover, purification) and folk teas for cough and colds. Samaritans have used the same plant in similar ways into modern times.",
    properties:
      "Rich in thymol and carvacrol — genuine antiseptic aromatics. Cleanliness law and pharmacy overlapped.",
    note: "John 19:29 places hyssop at the crucifixion; the plant sat in both liturgy and the medicine chest.",
  },
  {
    id: "fig",
    name: "Fig",
    latin: "Ficus carica",
    humoral: ["hot", "moist"],
    availability: "local",
    biblical: true,
    conditions: ["skin", "digestion", "wounds"],
    summary:
      "One of the few plants the Hebrew Bible names as medicine: a fig poultice on King Hezekiah’s boil (2 Kings 20:7).",
    uses: "Poultices for boils and swellings; ripe fruit as a gentle laxative and restorative food; latex of unripe figs as a caustic.",
    properties:
      "Enzymes in fig latex can break down tissue; fruit sugars and fiber aid the bowel. A household tree that doubled as a clinic.",
    note: "Isaiah, not a Greek physician, prescribes the poultice — local knowledge standing beside temple prayer.",
  },
  {
    id: "mandrake",
    name: "Mandrake",
    latin: "Mandragora officinarum",
    humoral: ["cold", "dry"],
    availability: "local",
    biblical: true,
    conditions: ["pain", "sleep", "women's health"],
    summary:
      "A Mediterranean nightshade whose forked root invited folklore. Genesis treats its fruits (dudaim) as a fertility charm.",
    uses: "Wine of mandrake for pain and sleeplessness; fruits for conception in folk belief. Surgeons may have used related nightshades as crude narcotics.",
    properties:
      "Contains atropine-like alkaloids. Genuinely sedating and dangerous. Overdose can kill. Ancient writers mixed pharmacology with magic.",
    note: "About 88 traditional uses are recorded in later herbals. Handle this plant as history, never as a recipe.",
  },
  {
    id: "nard",
    name: "Spikenard",
    latin: "Nardostachys jatamansi",
    humoral: ["hot", "dry"],
    availability: "imported",
    biblical: true,
    conditions: ["sleep", "skin", "pain"],
    summary:
      "An Himalayan aromatic, packed in alabaster flasks. Mary of Bethany anoints Jesus with nard worth a laborer’s yearly wage (John 12:3).",
    uses: "Perfume, anointing oil, calming preparations, and luxury medicine. Dioscorides lists nard among warming aromatics.",
    properties:
      "Valerian-family compounds can calm. In Judea the social meaning — honor, burial, extravagance — mattered as much as the chemistry.",
    note: "Proof that first-century Palestine was wired into Indian Ocean trade.",
  },
  {
    id: "aloe",
    name: "Aloes",
    latin: "Aloe spp. / Aquilaria (debate)",
    humoral: ["cold", "dry"],
    availability: "imported",
    biblical: true,
    conditions: ["digestion", "skin", "wounds"],
    summary:
      "John’s burial “aloes” may be succulent Aloe from Socotra (used in Egyptian embalming) or eaglewood. Both were costly imports.",
    uses: "Purging drinks, wound balsams, and burial spices mixed with myrrh. True aloe latex is a fierce laxative.",
    properties:
      "Aloe gel soothes skin; the yellow latex (aloin) strongly stimulates the bowel and can cramp. Ancient doses were not gentle.",
    note: "Nicodemus’s “hundred pounds” of myrrh and aloes is a royal quantity.",
  },
  {
    id: "garlic",
    name: "Garlic",
    latin: "Allium sativum",
    humoral: ["hot", "dry"],
    availability: "local",
    biblical: true,
    conditions: ["respiratory", "digestion", "infection"],
    summary:
      "A poor person’s medicine and a daily food. Numbers 11 remembers garlic among the flavors of Egypt.",
    uses: "Eaten raw or cooked for cough, worms, and “protection.” Rubbed on skin and mixed into poultices.",
    properties:
      "Allicin and related sulfur compounds have mild antimicrobial and cardiovascular effects. Cheap, local, and actually active.",
    note: "Greek physicians often classed it as heating and not always respectable — which did not stop households from using it.",
  },
  {
    id: "onion",
    name: "Onion",
    latin: "Allium cepa",
    humoral: ["hot", "dry"],
    availability: "local",
    biblical: false,
    conditions: ["respiratory", "digestion", "infection"],
    summary:
      "Sister to garlic in the kitchen and the clinic. Warming, cheap, and always at hand.",
    uses: "Poultices for ears and swellings; cooked in broths for colds; eaten to “thin” phlegm in humoral terms.",
    properties:
      "Similar sulfur chemistry to garlic, milder. Nutrition and folk antiseptic in one bulb.",
    note: "Typical of medicines that never appear in elite texts because they were too ordinary.",
  },
  {
    id: "black-cumin",
    name: "Black cumin",
    latin: "Nigella sativa",
    humoral: ["hot", "dry"],
    availability: "local",
    biblical: true,
    conditions: ["digestion", "respiratory", "fever"],
    summary:
      "Isaiah 28:25–27 names qetsah, widely taken as nigella, harvested with a rod. A staple seasoning of the Near East.",
    uses: "Seeds in bread and medicine for stomach, wind, and cough. Oil used on skin.",
    properties:
      "Thymoquinone has been studied for anti-inflammatory effects. Continuous medicinal use from Egypt and Mesopotamia through the Holy Land.",
    note: "A biblical plant that is also a kitchen jar — the usual overlap of food and pharmacy.",
  },
  {
    id: "cumin",
    name: "Cumin",
    latin: "Cuminum cyminum",
    humoral: ["hot", "dry"],
    availability: "local",
    biblical: true,
    conditions: ["digestion"],
    summary:
      "Jesus mentions tithing “mint, dill, and cumin” (Matthew 23:23). Digestive seed, tax crop, and medicine.",
    uses: "Teas and food spice for bloating, colic, and appetite. Classed as heating, so used in “cold” stomach complaints.",
    properties:
      "Aromatic oils relax intestinal muscle. Still a standard carminative.",
    note: "Small enough to tithe by the seed — and important enough to name.",
  },
  {
    id: "fennel",
    name: "Fennel",
    latin: "Foeniculum vulgare",
    humoral: ["hot", "dry"],
    availability: "local",
    biblical: false,
    conditions: ["digestion", "eyes", "respiratory"],
    summary:
      "Umbel of the Mediterranean scrub. Seeds chewed after meals; greens in cooking.",
    uses: "Wind, infant colic (in later tradition), milky eyes, and cough syrups. Dioscorides recommends it widely.",
    properties:
      "Anethole soothes the gut. A local stand-in for costlier imported spices.",
    note: "Often grouped with dill, caraway, and cumin as the “warming seeds.”",
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    latin: "Punica granatum",
    humoral: ["cold", "dry"],
    availability: "local",
    biblical: true,
    conditions: ["digestion", "wounds", "skin"],
    summary:
      "Fruit of priestly vestments and Temple capitals. Rind and seeds both entered pharmacy.",
    uses: "Rind as an astringent for diarrhea and as a wash for sores; juice as cooling food in feverish “hot” states; seeds against worms in some recipes.",
    properties:
      "Tannins in the rind truly astringe. Polyphenols are antioxidant. A sacred fruit with a practical bark.",
    note: "Cooling in humoral tables — opposite of cumin and garlic.",
  },
  {
    id: "date",
    name: "Date palm",
    latin: "Phoenix dactylifera",
    humoral: ["hot", "moist"],
    availability: "local",
    biblical: true,
    conditions: ["digestion", "fever"],
    summary:
      "Jericho was already famous for dates. Fruit as food-medicine; palm wine in some regions; pits burned or ground.",
    uses: "Strengthening the weak, binding loose bowels or loosening them depending on ripeness, and sweetening bitter drugs.",
    properties:
      "Dense calories, potassium, and sugars — genuine restoration for the exhausted. Honey’s cousin in the pantry.",
    note: "A Jericho specialty alongside balsam: the Jordan valley as pharmacy and orchard.",
  },
  {
    id: "olive",
    name: "Olive oil",
    latin: "Olea europaea",
    humoral: ["hot", "moist"],
    availability: "local",
    biblical: true,
    conditions: ["skin", "pain", "wounds"],
    summary:
      "The universal vehicle of Mediterranean medicine: food, lamp, anointing, and ointment base.",
    uses: "Massage for weariness (Celsus), carrier for herbs, wound dressing, and the oil of James 5:14. Green oil was thought more active.",
    properties:
      "Occlusive and soothing on skin; calories internally. Not antimicrobial by itself, but it made other drugs usable.",
    note: "If there was one “hospital supply” in a Galilean village, it was a jar of oil.",
  },
  {
    id: "myrtle",
    name: "Myrtle",
    latin: "Myrtus communis",
    humoral: ["cold", "dry"],
    availability: "local",
    biblical: true,
    conditions: ["skin", "respiratory", "digestion"],
    summary:
      "Fragrant evergreen of Sukkot branches. Pollen in ancient Judean contexts suggests herbal teas centuries before Jesus.",
    uses: "Astringent leaves for sores and fluxes; berries and oil for scent and cough. A plant of festival and pharmacy.",
    properties:
      "Myrtaceae oils are antiseptic. Archaeology at Megiddo found myrtle pollen in a mortar — possible tea or paste.",
    note: "Bridges biblical ritual and everyday herbalism.",
  },
  {
    id: "licorice",
    name: "Licorice",
    latin: "Glycyrrhiza glabra",
    humoral: ["hot", "moist"],
    availability: "regional",
    biblical: false,
    conditions: ["respiratory", "digestion"],
    summary:
      "Sweet root used to mask bitter drugs and soothe cough and stomach. A pharmacist’s friend.",
    uses: "Decoctions for cough, sore throat, and gastric burning. Mixed into electuaries with honey.",
    properties:
      "Glycyrrhizin is anti-inflammatory and can raise blood pressure in modern use. Genuinely demulcent on mucosa.",
    note: "The sweetness was the point: patients would swallow the rest of the mixture.",
  },
  {
    id: "ginger",
    name: "Ginger",
    latin: "Zingiber officinale",
    humoral: ["hot", "dry"],
    availability: "imported",
    biblical: false,
    conditions: ["digestion", "fever", "pain"],
    summary:
      "A tropical rhizome reaching the Mediterranean by long-distance spice trade. Luxury warmth in a cup.",
    uses: "Nausea, cold stomach, and as a heating spice in “cold, wet” illnesses. Added to wine and food.",
    properties:
      "Gingerols reduce nausea — one of the clearest overlaps of ancient use and modern evidence.",
    note: "Not a Galilean garden plant; a merchant’s medicine.",
  },
  {
    id: "cinnamon",
    name: "Cinnamon and cassia",
    latin: "Cinnamomum spp.",
    humoral: ["hot", "dry"],
    availability: "imported",
    biblical: true,
    conditions: ["digestion", "infection", "respiratory"],
    summary:
      "Bark of tropical trees, named in the holy anointing oil (Exodus 30:23–24) and sold at perfume prices.",
    uses: "Warming drinks, digestive wines, and aromatic salves. Status as much as therapy.",
    properties:
      "Cinnamaldehyde is antimicrobial and warming on the tongue. The humoral label “hot” matches the sensation.",
    note: "Archaeology confirms cinnamon in the wider ancient Near East; first-century elites could obtain it.",
  },
  {
    id: "mustard",
    name: "Mustard",
    latin: "Brassica / Sinapis spp.",
    humoral: ["hot", "dry"],
    availability: "local",
    biblical: true,
    conditions: ["pain", "respiratory"],
    summary:
      "Jesus’s mustard seed is a parable of growth; the same plant became a plaster that burned the skin on purpose.",
    uses: "Warming plasters for chest and joints; seed internally as a stimulant. Counter-irritation: hurt the surface to help the depth.",
    properties:
      "Isothiocyanates inflame the skin and increase blood flow. Relief is real; blisters are the risk.",
    note: "A peasant crop with a physician’s use.",
  },
  {
    id: "mastic",
    name: "Mastic",
    latin: "Pistacia lentiscus",
    humoral: ["hot", "dry"],
    availability: "regional",
    biblical: false,
    conditions: ["digestion", "infection", "wounds"],
    summary:
      "Resin of the lentisk tree, especially from Chios, chewed for breath and stomach. Related pistacias grow in the Levant.",
    uses: "Chewing gum of antiquity; wound plasters; stomach complaints. Sold as a refined Greek product.",
    properties:
      "Documented activity against Helicobacter-type organisms in modern studies — a rare case where “stomach resin” looks prescient.",
    note: "Lentisk is also a candidate in some identifications of biblical “balm,” though Gilead balsam is the usual luxury.",
  },
  {
    id: "lemon-balm",
    name: "Lemon balm",
    latin: "Melissa officinalis",
    humoral: ["hot", "dry"],
    availability: "local",
    biblical: false,
    conditions: ["sleep", "digestion", "skin"],
    summary:
      "Bee-loved mint of Mediterranean gardens. Tea for the anxious and the tight-stomached.",
    uses: "Infusions for restlessness; salves for sores; a pleasant smell associated with cheer (sanguine correction of melancholy).",
    properties:
      "Mild sedative terpenes. Safer than mandrake, weaker than wine.",
    note: "A reminder that not every useful plant is named in Scripture.",
  },
  {
    id: "senna",
    name: "Senna / cassia leaves",
    latin: "Senna spp.",
    humoral: ["hot", "dry"],
    availability: "imported",
    biblical: false,
    conditions: ["digestion"],
    summary:
      "Purging leaves from the south. Dioscorides and later Egyptian-Arabic pharmacy made cassia/senna a standard cathartic.",
    uses: "Constipation and the humoral goal of “evacuating” peccant matter. Harsh cramping was expected.",
    properties:
      "Sennosides stimulate the bowel. It works — sometimes too well. Dehydration and weakness followed heroic doses.",
    note: "When a physician “cleaned the humors,” this is often what that meant.",
  },
  {
    id: "parsley",
    name: "Parsley and lovage",
    latin: "Petroselinum / Levisticum",
    humoral: ["hot", "dry"],
    availability: "local",
    biblical: false,
    conditions: ["digestion", "women's health"],
    summary:
      "Garden umbellifers used as diuretics and digestive greens. Lovage was a Roman kitchen-pharmacy staple.",
    uses: "Teas to “move urine,” season fish and broth, and gently stimulate a sluggish system.",
    properties:
      "Apiole-rich oils can irritate kidneys in excess and were traditionally (and dangerously) used for delayed menses.",
    note: "Household herbs sat on a blurry line between garnish and drug.",
  },
  {
    id: "honey",
    name: "Honey",
    latin: "Apis mellifera product",
    humoral: ["hot", "dry"],
    availability: "local luxury",
    biblical: true,
    conditions: ["wounds", "respiratory", "infection"],
    summary:
      "Not a plant, but the most trusted natural dressing. Proverbs calls pleasant words a honeycomb; physicians used the real thing on flesh.",
    uses: "Wound packing, cough linctus, and a vehicle that made bitter roots drinkable. Mixed with wine or vinegar.",
    properties:
      "Low water activity, acidity, and slow hydrogen peroxide production make honey genuinely antimicrobial. One of antiquity’s best ideas.",
    note: "Expensive. Poor families used oil and water; the well-off used honey.",
  },
  {
    id: "wine",
    name: "Wine",
    latin: "Vitis vinifera",
    humoral: ["hot", "moist"],
    availability: "local",
    biblical: true,
    conditions: ["digestion", "wounds", "pain", "fever"],
    summary:
      "The default internal medicine. Paul tells Timothy to take a little wine for his stomach (1 Timothy 5:23). Celsus is full of wine regimens.",
    uses: "Diluted with meals; stronger for pain; poured on wounds as a wash; mixed with herbs as a tincture before anyone named tinctures.",
    properties:
      "Alcohol dulls pain and can inhibit some microbes. Excess wrecks the liver and judgment. Ancient advice almost always says “a little,” then often pours more.",
    note: "The Good Samaritan pours oil and wine on wounds (Luke 10:34) — a compact first-century first-aid kit.",
  },
  {
    id: "lemnian-earth",
    name: "Lemnian earth",
    latin: "Terra Lemnia (clay)",
    humoral: ["cold", "dry"],
    availability: "imported",
    biblical: false,
    conditions: ["wounds", "digestion", "infection"],
    summary:
      "A stamped medicinal clay from Lemnos, famous across the empire. Not a Judean product, but a brand-name mineral drug.",
    uses: "Wounds, fluxes, and swallowed as an antidote. Sealed tablets advertised authenticity.",
    properties:
      "Absorbent clays can bind toxins and dry weeping sores. The ritual of digging it mattered to buyers as much as the chemistry.",
    note: "Shows that first-century pharmacy already had trademarks.",
  },
];
