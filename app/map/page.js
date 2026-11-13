import PlacesExplorer from "@/components/PlacesExplorer";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "A Map of Ancient Medicine",
  description:
    "An interactive map of first-century medicine: Jerusalem, Jericho’s balsam, Dead Sea bitumen, Qumran, Capernaum, Alexandria, Pergamon, Kos, Rome, and Anazarbus.",
  path: "/map",
});

export default function Page() {
  return <PlacesExplorer />;
}
