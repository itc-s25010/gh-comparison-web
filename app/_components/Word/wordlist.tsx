export type Word = {
  term: string;
  reading?: string; // 読み方（任意）
  description: string;
};

export const words: Word[] = [
  {
    term: "CPU",
    reading: "シーピーユー",
    description:
      "ゲーム機の頭脳にあたる部品です。ゲームの進行やキャラクターの動き、計算処理など、プログラム全般を担当します。",
  },
  {
    term: "コア数",
    description:
      "CPUの中にある、実際に計算を行う部分の数です。コアが多いほど、複数の処理を同時に進めやすくなります。「8コア」は、その部分が8つあるという意味です。",
  },
  {
    term: "動作クロック（GHz）",
    description:
      "CPUが1秒間に処理のタイミングを刻む回数です。GHz（ギガヘルツ）は10億回/秒を表し、1.0GHzなら1秒間に約10億回です。数字が大きいほど速く動作しやすいですが、設計が違う製品同士では、クロックだけで性能の優劣は決められません。",
  },
  {
    term: "GPU",
    reading: "ジーピーユー",
    description:
      "画面に映る映像を描く専用の部品です。グラフィックの美しさや、動きの滑らかさに大きく影響します。",
  },
  {
    term: "FLOPS",
    reading: "フロップス",
    description:
      "GPUの計算能力を表す単位で、1秒間に小数を含む計算を何兆回できるかを示します（1TFLOPSは1秒間に1兆回）。数字が大きいほど計算能力は高いですが、実際のゲームの見た目は、メモリなど他の部品にも左右されます。",
  },

  {
    term: "メモリ",
    description:
      "ゲームの動作中に、データを一時的に置いておく作業机のような場所です。容量が大きいほど、多くのデータを同時に扱えます。電源を切ると内容は消えます。",
  },

  {
    term: "帯域幅（GB/s）",
    reading: "たいいきはば",
    description:
      "メモリとの間で、1秒間にやり取りできるデータ量です。道路の幅に例えられ、広いほど大量のデータを一度に流せます。",
  },
  {
    term: "解像度",
    reading: "かいぞうど",
    description:
      "画面を構成する点（ピクセル）の数です。フルHDは1920×1080、4Kは約3840×2160で、数が多いほど細かく映ります。",
  },

  {
    term: "フレームレート（fps）",
    description:
      "1秒間に表示される画像の枚数です。60fps なら1秒間に60枚で、数が大きいほど動きが滑らかに見えます。比較表では「Hz」で書かれることもあります。",
  },

  {
    term: "ストレージ",
    description:
      "ゲームやセーブデータを保存しておく場所です。メモリと違い、電源を切っても内容が残ります。",
  },

  {
    term: "バッテリー",
    description:
      "携帯機で、電源につなげずに遊ぶための電池です。遊べる時間（駆動時間）や、容量（mAh）で表されます。据え置き機には無いため、表では「-」になります。",
  },
];

export default function WordList() {
  return (
    <section className="wordlist">
      <h2>用語集</h2>
      <dl>
        {words.map((w) => (
          <div key={w.term} className="word">
            <dt>
              {w.term}
              {w.reading && <span>（{w.reading}）</span>}
            </dt>
            <dd>{w.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
