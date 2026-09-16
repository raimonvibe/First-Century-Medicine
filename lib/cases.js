export const cases = [
  {
    id: "fever",
    number: "01",
    title: "A merchant with fever",
    patient: "A middle-ranking trader, about 35",
    setting: "A market town on the road between Jerusalem and the coast",
    symptoms: "Two days of high heat, headache, and aching limbs. Dark, scant urine.",
    diagnosis:
      "Excess blood — a “hot” acute illness. Celsus would first decide whether the fever is still climbing and whether the man is strong enough to bleed.",
    plan: [
      "Question the course of the fever; feel the pulse and inspect urine.",
      "If strength allows: venesection from the arm, perhaps a cup or two.",
      "Cool room, diluted wine, light barley gruel.",
      "Ginger or mint tea if the stomach turns; rest, not a full bath while the heat is violent.",
    ],
    outcome:
      "Many short fevers break on their own. If he recovers on the third or fourth day, the physician is praised. If it is typhoid or malaria, bleeding may only weaken him.",
    modern:
      "Likely a viral or bacterial infection. Cooling, fluids, and rest help. Removing blood does not.",
  },
  {
    id: "digestion",
    number: "02",
    title: "An older woman who cannot go",
    patient: "A grandmother in a courtyard household, about 60",
    setting: "Lower Galilee",
    symptoms: "Constipation, bloating, little appetite, cold hands. She calls it “phlegm in the belly.”",
    diagnosis: "Cold, wet imbalance. The goal is to warm, moisten the right places, and evacuate.",
    plan: [
      "Senna or another cathartic tea — this part actually works.",
      "Warm cumin or fennel in bread and broth.",
      "A warm bath, then oiling.",
      "Walk the courtyard; avoid raw fruit and cold water.",
    ],
    outcome:
      "Bowel movement and attention both help. She feels seen. Harsh purges could dehydrate her.",
    modern:
      "Fiber, fluid, movement, and (if needed) a gentle laxative. Senna is still in pharmacies — with the same cramping warning.",
  },
  {
    id: "wound",
    number: "03",
    title: "A laborer’s festering cut",
    patient: "A builder, gashed by a chisel",
    setting: "Outskirts of Sepphoris or Jerusalem’s works",
    symptoms: "The cut is red, hot, swollen, and leaking pus — Celsus’s four signs of inflammation together.",
    diagnosis: "Corrupted blood gathering. If fever rises, the wound is “going in.”",
    plan: [
      "Wash with water, then wine (the Good Samaritan’s kit).",
      "Honey or balsam if anyone can spare them; otherwise oil and a clean rag.",
      "Change the dressing; drain an abscess with a lancet if it points.",
      "If red streaks climb: cautery. Prayer alongside.",
    ],
    outcome:
      "Localized infection may drain and heal. Spreading infection (sepsis) is often fatal. No one in the room has heard of bacteria.",
    modern:
      "Irrigation, tetanus thinking, antibiotics, sterile technique. Wine and honey were the best antiseptics they had.",
  },
  {
    id: "cough",
    number: "04",
    title: "A child who cannot stop coughing",
    patient: "A girl, about 8",
    setting: "A stone house in winter",
    symptoms: "Cough with phlegm, sore throat, sleepless parents. No rash, no collapse — yet.",
    diagnosis: "Excess phlegm, a cold-wet illness of the chest.",
    plan: [
      "Honey and licorice or hyssop tea, not a full adult wine dose.",
      "Warm plaster on the chest — mustard if they dare, oil if they don’t.",
      "Steam from a basin; keep her from the night air.",
      "Celsus: do not bleed children readily, do not starve them heroically.",
    ],
    outcome:
      "Most winter coughs fade in a week or two. Diphtheria or pneumonia would not. The honey soothes; the mustard may blister.",
    modern:
      "Supportive care for viral cough; urgent assessment if breathing labors. Honey is still advised for children over one year — never for infants.",
  },
  {
    id: "fracture",
    number: "05",
    title: "A fall from scaffolding",
    patient: "A man, about 40, forearm bent the wrong way",
    setting: "A building site",
    symptoms: "Pain, swelling, a grating feel. Fingers still pink, which the setter checks if he is good.",
    diagnosis: "Broken bone. Surgery here means hands, splints, and speed — not opening the skin if it can be avoided.",
    plan: [
      "Wine first.",
      "Reduce the fracture (pull, align) before swelling wins.",
      "Wooden or reed splints, linen, the arm bound to the chest.",
      "Watch for numbness, blackness, fever. Amputation only if the limb dies.",
    ],
    outcome:
      "A clean break, well set, can heal with stiffness. A bad set is a lifelong crook. Open fractures often kill by infection.",
    modern:
      "X-ray, reduction, plaster or surgery, antibiotics for open bone. The logic of immobilization is the same.",
  },
  {
    id: "skin",
    number: "06",
    title: "A scaly rash — and a priest",
    patient: "A woman, about 50, itchy plaques on arms and shins",
    setting: "Village plus, if needed, a priestly inspection",
    symptoms: "Dry scales, not the white-deep lesions Leviticus describes as tzara’at, but neighbors still whisper.",
    diagnosis:
      "A physician may say hot-dry corruption. A priest, if consulted, decides clean or unclean. Those are different jobs.",
    plan: [
      "Cool baths with oil or myrtle.",
      "Olive-oil salve with balm if affordable.",
      "Cooling foods: cucumber, pomegranate, light bread.",
      "If it resembles Levitical skin disease: isolation until re-examination — public health dressed as holiness.",
    ],
    outcome:
      "Psoriasis and eczema wax and wane. Isolation protects the community when the disease is truly contagious; it also shames the unlucky.",
    modern:
      "Dermatology versus infection control. Leviticus 13 is surprisingly observational: color, depth, spread, hair.",
  },
  {
    id: "childbirth",
    number: "07",
    title: "Labor that will not progress",
    patient: "A woman, 28, second child, many hours in travail",
    setting: "Women’s room; a midwife in charge, a male physician only if disaster",
    symptoms: "Exhaustion, thinning hope. The midwife feels the lie of the child.",
    diagnosis: "Not a humor lecture. Position, strength, and time.",
    plan: [
      "Walk, squat, change posture; warm oil on the belly.",
      "Herbal teas believed to “bring on” pains — some harmless, some not.",
      "Wine in sips. Prayer, amulets, the presence of other women.",
      "No cesarean on a living mother. Manual intervention is last and dangerous.",
    ],
    outcome:
      "Most births, historically, succeed. Obstructed labor, hemorrhage, and childbed fever are leading killers of young women in this world.",
    modern:
      "Midwifery still starts with time and position. Surgery, blood, and antibiotics changed the ending of this story.",
  },
  {
    id: "headache",
    number: "08",
    title: "A blinding headache",
    patient: "A synagogue elder, 45, who has to leave the light",
    setting: "A darkened inner room",
    symptoms: "One-sided pounding, sick stomach, hatred of lamps. He has had this before.",
    diagnosis: "Hot bile rising, or blood crowding the head. Migraine by another metaphysics.",
    plan: [
      "Dark, quiet, cool cloth on the brow.",
      "Sometimes blood from the temples — a bad idea that sounded local and logical.",
      "Cooling herbs, little food, no strong wine.",
      "Sleep if the gods (or physiology) allow.",
    ],
    outcome:
      "The attack ends, as migraines do. Temple bleeding adds injury. Darkness and rest were the wise parts.",
    modern:
      "Migraine: environment, anti-nausea medicine, specific drugs. Not venesection.",
  },
  {
    id: "melancholy",
    number: "09",
    title: "An old man who will not eat",
    patient: "A widower, about 70, once talkative",
    setting: "Family roof and street",
    symptoms: "No hunger, weak legs, early waking, talk of being a burden. Black bile, they say.",
    diagnosis: "Melancholic temperament in excess — cold and dry. The treatment is as social as it is medical.",
    plan: [
      "Warming foods, honeyed wine in small cups, spices to tempt taste.",
      "Walking with a grandson; music; a change of courtyard shade.",
      "Some physicians still bleed for melancholy — a risk in the frail.",
      "Prayer and the refusal to leave him alone.",
    ],
    outcome:
      "Company and calories sometimes lift him. If the cause is cancer, grief, or dementia, the diagnosis still gives the family a script for care.",
    modern:
      "Depression, bereavement, and frailty need food, people, and medical review — not bloodletting. The social prescription was the treasure.",
  },
  {
    id: "joints",
    number: "10",
    title: "Winter in the joints",
    patient: "A farm laborer, 75, knuckles and knees like knotted wood",
    setting: "A hill village after rain",
    symptoms: "Stiffness at dawn, better after movement, worse in cold. No single injury.",
    diagnosis: "Cold and dry invading the joints; thick humors. Chronic, not a one-visit cure.",
    plan: [
      "Hot baths and oiling, the Roman-Jewish common sense.",
      "Mustard or warming plasters.",
      "Spiced food and wine; stay near the brazier.",
      "Gentle use of the hands — complete rest makes them worse.",
    ],
    outcome:
      "Heat and motion still help osteoarthritis. There is no cure here, only a winter strategy.",
    modern:
      "Warmth, physiotherapy, analgesia, joint replacement for the few. The first-century plan is palliative — and not foolish.",
  },
];
