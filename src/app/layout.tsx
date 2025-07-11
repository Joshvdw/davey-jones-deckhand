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


export const metadata: Metadata = {
    title: "Davey Jones' Deckhand",
    description: "Perfect. Pirate. Parries. Unleash outrageous counter-attack chains in this swashbuckling adventure. Will you break free from Davy Jones' locker?\n",
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
