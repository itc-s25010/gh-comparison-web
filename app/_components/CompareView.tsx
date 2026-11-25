"use client";

import { useState } from "react";
import Image from "next/image";
import type { Hard } from "../data/types";

const rows: { label: string; key: keyof Hard }[] = [
  { label: "販売元", key: "maker" },
  { label: "発売日", key: "release" },
  { label: "CPU", key: "cpu" },
  { label: "GPU", key: "gpu" },
  { label: "メモリ", key: "memory" },
  { label: "解像度", key: "resolution" },
  { label: "フレームレート", key: "fps" },
  { label: "ストレージ", key: "storage" },
  { label: "バッテリー", key: "battery" },
];

// 空欄は「—」、発売日は日付部分だけ表示
const show = (item: Hard, key: keyof Hard) => {
  const v = item[key];
  if (typeof v !== "string" || v === "") return "—";
  return key === "release" ? v.slice(0, 10) : v;
};

export default function CompareView({ hardList }: { hardList: Hard[] }) {
  const [aId, setAId] = useState(hardList[0]?.id ?? "");
  const [bId, setBId] = useState(hardList[1]?.id ?? "");

  const a = hardList.find((item) => item.id === aId);
  const b = hardList.find((item) => item.id === bId);
  const selected = [a, b].filter((x): x is Hard => x !== undefined);

  return (
    <main className="page-shell">
      <section>
        <header className="hero">
          <p className="eyebrow">HARDWARE ARCHIVE</p>
          <h1 className="title">ゲーム機スペック比較</h1>
          <p className="hero-copy">気になるゲーム機の性能を、並べて見比べる。</p>
        </header>

      <div className="selector-panel">
        <div className="selector-field">
          <label htmlFor="console-a">01　比較する機種</label>
          <select id="console-a" value={aId} onChange={(e) => setAId(e.target.value)}>
            <option value="">選択してください</option>
            {hardList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <span className="versus">VS</span>
        <div className="selector-field">
          <label htmlFor="console-b">02　比較する機種</label>
          <select id="console-b" value={bId} onChange={(e) => setBId(e.target.value)}>
            <option value="">選択してください</option>
            {hardList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selected.length > 0 && (
        <div className="compare-wrap"><table className="compare">
          <thead>
            <tr>
              <th></th>
              {selected.map((item, i) => (
                <th key={`${item.id}-${i}`}>
                  {item.image && (
                    <Image
                      src={item.image.url}
                      alt={item.name}
                      width={200}
                      height={200}
                      style={{ objectFit: "contain" }}
                    />
                  )}
                  <div>{item.name}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <td>{row.label}</td>
                {selected.map((item, i) => (
                  <td key={`${item.id}-${i}`}>{show(item, row.key)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table></div>
      )}
      </section>
    </main>
  );
}
