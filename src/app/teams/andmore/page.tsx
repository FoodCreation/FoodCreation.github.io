import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4">Andmore Team Page</h1>
      <div className="text-lg text-gray-500 border border-dashed border-gray-400 rounded-lg px-8 py-6 bg-gray-50 mb-8">
        このページは現在制作中です。
      </div>
      <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        ホームに戻る
      </Link>
    </div>
  );
}