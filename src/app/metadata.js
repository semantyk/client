const metadata = {
    // Logic
    alternates: {
        canonical: "/",
        languages: {
            "en": "/en",
            "es": "/es"
        }
    },
    applicationName: "Semantyk",
    authors: [
        { name: "Semantyk Team", url: "https://id.semantyk.com" }
    ],
    creator: "Semantyk Team",
    description: "Ideas Wonder | Knowledge Graphs Interactive Experience" +
        " Ecosystem.",
    href: "/",
    icons: {
        icon: "/icon.png",
        shortcut: "/favicon.ico",
        apple: "/apple-icon.png"
    },
    keywords: [
        "semantyk",
        "ideas wonder",
        "knowledge graphs",
        "interactive"
    ],
    lang: "en",
    metadataBase: new URL("https://www.semantyk.com"),
    openGraph: {
        title: "Semantyk",
        description: "Ideas Wonder | Knowledge Graphs Interactive Experience" +
            " Ecosystem.",
        url: "/",
        siteName: "Semantyk",
        images: [
            "/opengraph-image.png"
        ],
        locale: "en",
        type: "website",

    },
    title: {
        default: "Semantyk",
        template: "%s | Semantyk"
    },
    twitter: {
        card: "summary_large_image",
        title: "Semantyk",
        description: "Ideas Wonder | Knowledge Graphs Interactive Experience" +
            " EcoSystem.",
        siteId: "",
        creator: "@semantyk",
        creatorId: "",
        images: ["/opengraph-image.png"],
    }
};

export default metadata;