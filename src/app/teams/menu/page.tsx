import React from "react";
import TeamPageLayout from "@/components/Teams/TeamPageLayout";
import { menuTeamData } from "@/data/menuTeam";

export const metadata = {
    title: `${menuTeamData.title} | 金沢工業大学 フードクリエーションプロジェクト`,
    description: menuTeamData.subtitle,
};

export default function MenuTeamPage() {
    return <TeamPageLayout data={menuTeamData} />;
}