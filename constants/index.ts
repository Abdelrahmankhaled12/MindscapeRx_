export interface Link {
    router: string;
    title: string;
}

export const HEADER_LINKS: Link[] = [
    {
        router: "/",
        title: "Home",
    },
    {
        router: "/program",
        title: "Program",
    },
    {
        router: "/get-started",
        title: "Get Started",
    },
    {
        router: "/faq",
        title: "FAQ",
    },
    {
        router: "/science",
        title: "Science",
    },
    {
        router: "/blog",
        title: "Blog",
    },
];

// =======================================================================
// =======================================================================

export const EXPLORE_ITEMS: Link[] = [
    {
        router: "/faq",
        title: "FAQs",
    },
    {
        router: "/program",
        title: "Program",
    },
    {
        router: "/get-started",
        title: "Get Started",
    },
    {
        router: "/science",
        title: "Science",
    },
];

// =======================================================================
// =======================================================================

export const MINDSCAPE_ITEMS: Link[] = [
    {
        router: "/",
        title: "Member",
    },
    {
        router: "/",
        title: "Reviews",
    },
    {
        router: "/",
        title: "Our Story",
    },
    {
        router: "/",
        title: "Help Center",
    },
];
