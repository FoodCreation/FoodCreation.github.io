// components/TeamsWeb/WebHeader.tsx

type Props = {
  title: string;
};

export default function WebHeader({ title }: Props) {
  return (
    <header className="bg-red-600 text-white px-6 py-3 flex items-center gap-4">
      
      {/* 左：アイコン表示エリア */}
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        <img
          src="/img/desktop/foocre8_icon_348.png"
          alt="Web班アイコン"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 右：タイトル */}
      <h1 className="text-2xl font-bold">
        {title}
      </h1>
    </header>
  );
}
