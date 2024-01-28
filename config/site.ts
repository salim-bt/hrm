export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Next.js + NextUI",
    description: "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "dashboard",
            href: "/",
        },
        {
            label: "leave",
            href: "/leave",
        },
        {
            label: "leave request",
            href: "/leave/request",
        },
        {
            label: "apply leave",
            href: "/leave/apply"
        }
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/",
        },
        {
            label: "leave",
            href: "/leave",
        },
        {
            label: "leave request",
            href: "/leave/request",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
};
