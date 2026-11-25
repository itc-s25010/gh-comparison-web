import Link from "next/link";
import { getHardList } from "./_libs/microcms";
import CompareView from "./_components/CompareView";

export default async function Home() {
  const hardList = await getHardList();
  return (
    <>
      <nav className="site-header" aria-label="メインナビゲーション">
        <Link className="brand" href="/"><span className="brand-mark">◈</span>CONSOLE INDEX</Link>
        <span className="header-note">GAME HARDWARE ARCHIVE</span>
      </nav>
      <CompareView hardList={hardList} />
      <p className="more-link">
        <Link href="/words">用語集を見る →</Link>
      </p>
      <footer className="site-footer">A FIELD GUIDE TO GAME HARDWARE</footer>
    </>
  );
}
