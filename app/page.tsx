import { getHardList } from "./_libs/microcms";
import CompareView from "./_components/CompareView";

export default async function Home() {
  const hardList = await getHardList();
  return <CompareView hardList={hardList} />;
}
