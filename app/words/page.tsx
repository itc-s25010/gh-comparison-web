import Link from "next/link";
import WordList from "../_components/Word/wordlist";

export const metadata = {
  title: "用語集",
};

export default function WordsPage() {
  return (
    <>
      <nav className="site-header" aria-label="メインナビゲーション">
        <Link className="brand" href="/"><span className="brand-mark">◈</span>CONSOLE INDEX</Link>
        <span className="header-note">GAME HARDWARE ARCHIVE</span>
      </nav>
      <main className="page-shell">
        <header className="hero words-hero">
          <p className="eyebrow">GLOSSARY</p>
          <h1 className="title">ゲーム機の用語集</h1>
          <p className="hero-copy">スペックを読み解くための、基本のことば。</p>
        </header>
        <WordList />
      </main>
      <p className="back-link">
        <Link href="/">← 比較ページに戻る</Link>
      </p>
      <footer className="site-footer">A FIELD GUIDE TO GAME HARDWARE</footer>
    </>
  );
}
