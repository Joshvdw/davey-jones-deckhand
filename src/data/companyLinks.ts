export type SocialLinks = {
    name: string;
    link: string;
}

export type Email = {
    name: string;
    link: string;
}

export const email: Email = {
    name: "email",
    link: "ben@cassbaygames.com",
}

export const socialLinks: SocialLinks[] = [
    {
        name: "twitter",
        link: "https://x.com/CassBayGames",
    },
    {
        name: "BSKY",
        link: "https://bsky.app/profile/cassbaygames.bsky.social"
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/cassbaygames/",
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/company/cass-bay-games",
    }
]