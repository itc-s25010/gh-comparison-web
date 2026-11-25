import "./globals.css";

export const metadata = {
  title: "Console Index | ゲーム機スペック比較",
  description: "ゲーム機のスペックを並べて比較できるハードウェアガイド。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
