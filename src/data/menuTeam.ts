export const menuTeamData = {
    // 基本情報
    title: "メニュー班",
    subtitle: "新メニューの開発やマーケティング、SNSで活動の配信を行っています。",
    headerImage: "/img/desktop/MenuTeam.png",
    headerColor: "#fbbf24", // 黄色
    
    // メイン画像（複数対応）
    mainImages: [
        {
            src: "/img/desktop/MenuTeam.png",
            alt: "メニュー班の活動写真1"
        },
        {
            src: "/img/desktop/NIJV9793.jpg",
            alt: "メニュー班の活動写真2"
        },
        {
            src: "/img/desktop/MenuTeam.png",
            alt: "メニュー班の活動写真3"
        },
    ],
    
    // 活動内容セクション
    aboutSection: {
        title: "活動内容",
        paragraphs: [
            "新メニューの開発やマーケティング、SNSで活動の配信を行っています。食べることが好きな方、データの分析をしてみたい方、マーケティングに興味がある方など大歓迎です！",
            "メニュー班では、株式会社ハチバンと連携して、学生目線での新しいメニュー提案を行っています。試作から試食、改善を繰り返しながら、実際の店舗で提供されるメニューを作り上げていきます。"
        ]
    },
    
    // おすすめポイント
    recommendSection: {
        title: "こんな方におすすめ",
        items: [
            "食べることが好きな方",
            "データの分析をしてみたい方",
            "マーケティングに興味がある方",
            "SNSでの情報発信に興味がある方",
            "新しいことにチャレンジしたい方"
        ]
    },
    
    // 追加セクション（自由に追加・削除可能）
    additionalSections: [
        {
            title: "活動実績",
            content: "ここに活動実績の内容を記載できます。",
            images: [{src:"/img/desktop/MenuTeam.png", alt:"活動実績の画像"}]
        }
    ],
    
    // CTAボタン
    ctaButton: {
        text: "参加について問い合わせる",
        link: "/#Contact"
    }
};
