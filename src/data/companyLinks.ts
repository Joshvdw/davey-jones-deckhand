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
        name: "x",
        link: "https://x.com/CassBayGames",
    },
    {
        name: "bsky",
        link: "https://bsky.app/profile/cassbaygames.bsky.social"
    },
    {
        name: "instagram",
        link: "https://www.instagram.com/cassbaygames/",
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/company/cass-bay-games",
    }
]