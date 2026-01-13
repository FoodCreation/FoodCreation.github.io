import WebHeader from "@/components/TeamsWeb/WebHeader";
import WebSlider from "@/components/TeamsWeb/WebSlider";
import WebFooter from "@/components/TeamsWeb/WebFooter";

export default function Page() {
  return (
    <>
      <WebHeader title="フードクリエイション" />
      <main className="max-w-5xl mx-auto p-4">
        <WebSlider />
        {/* 他のコンテンツ */}
      </main>
      <WebFooter />
    </>
  );
}
