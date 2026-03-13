import React from "react";

type TeamInfo = {
  name: string;
  description: string;
};

const team: TeamInfo = {
  name: "Web班",
  description:
    "Web班はアプリ開発やWebサイト構築を通して、班活動の情報発信や仕組みづくりを担当しています。",
};

// 🔽 写真はここに追加するだけ
const teamPhotos = [
  "/img/team/photo1.jpg",
  "/img/team/photo2.jpg",
  "/img/team/photo3.jpg",
];

const achievements = [
  {
    title: "サイト運営",
    detail: "フードクリエイションプロジェクトの公式サイトを管理・更新しています。",
  },
  {
    title: "アプリ開発",
    detail: "ポイント管理アプリの設計・実装を行っています。",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen p-6 max-w-5xl mx-auto space-y-12">

      {/* ===== 班の紹介 ===== */}
      <section className="border rounded-lg p-6 shadow-sm bg-white">
        <h2 className="text-3xl font-bold mb-4">{team.name}の紹介</h2>
        <p className="text-gray-700 leading-relaxed">
          {team.description}
          <br />
          Web技術を活かして、プロジェクト全体を支える役割を担っています。
        </p>
      </section>

      {/* ===== 班の風景 ===== */}
      <section className="border rounded-lg p-6 shadow-sm bg-white">
        <h2 className="text-3xl font-bold mb-6">班の風景</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamPhotos.map((src, i) => (
            <div
              key={i}
              className="border-2 border-dashed rounded h-48 bg-gray-50 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`班の風景 ${i + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== 班の成果 ===== */}
      <section className="border rounded-lg p-6 shadow-sm bg-white">
        <h2 className="text-3xl font-bold mb-6">班の成果</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map(({ title, detail }, i) => (
            <div
              key={i}
              className="border rounded-lg p-5 bg-gray-50 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
