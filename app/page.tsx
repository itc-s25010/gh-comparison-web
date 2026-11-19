"use client";

import { useState } from "react";
import { hardList } from "./data/hard";

export default function Home() {
  const [aId, setAId] = useState(hardList[0]?.id ?? "");
  const [bId, setBId] = useState(hardList[1]?.id ?? "");

  const a = hardList.find((item) => item.id === aId);
  const b = hardList.find((item) => item.id === bId);

  return (
    <section>
      <h1 className="title">トップページ</h1>

      <div className="selectors">
        <select value={aId} onChange={(e) => setAId(e.target.value)}>
          {hardList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <select value={bId} onChange={(e) => setBId(e.target.value)}>
          {hardList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {a && b && (
        <table className="compare">
          <thead>
            <tr>
              <th>項目</th>
              <th>{a.name}</th>
              <th>{b.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CPU</td>
              <td>{a.cpu}</td>
              <td>{b.cpu}</td>
            </tr>
            <tr>
              <td>GPU</td>
              <td>{a.gpu}</td>
              <td>{b.gpu}</td>
            </tr>
            <tr>
              <td>メモリ</td>
              <td>{a.memoryGB}GB</td>
              <td>{b.memoryGB}GB</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
}
