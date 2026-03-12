import React from "react";
import TeamPageLayout from "@/components/Teams/TeamPageLayout";
import { webTeamData } from "@/data/webTeam";

export const metadata = {
    title: `${webTeamData.title} | 金沢工業大学 フードクリエイションプロジェクト`,
    description: webTeamData.subtitle,
};

export default function WebTeamPage() {
    return <TeamPageLayout data={webTeamData} />;
}
