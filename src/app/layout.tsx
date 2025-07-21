import type {Metadata} from "next";
import {Analytics} from "@vercel/analytics/next"
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Lexend} from "next/font/google";
import "./globals.css";

const lexendSans = Lexend({
    variable: "--font-lexend-sans",
    subsets: ["latin"],
    display: "swap",
});


const metaDescription: string = "Unleash outrageous counter-attack chains in this swashbuckling adventure where every voyage is a brutal roguelike deckbuilder. Will you break free from Davy Jones’ locker?";
const siteUrl: string = "https://cassbaygames.com";
const ogImage: string = `${siteUrl}/Cass_Bay_Games_website_preview_image.jpg`;

export const metadata = {
    title: "Davy Jones' Deckhand",
    description: metaDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
        title: "Davy Jones' Deckhand",
        description: metaDescription,
        url: siteUrl,
        siteName: "Davy Jones' Deckhand",
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 600,
                alt: "Davy Jones' Deckhand",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Davy Jones' Deckhand",
        description: metaDescription,
        images: [ogImage]
    },
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${lexendSans.variable}`}>
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
