import Script from 'next/script';
import React from 'react';

export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Davy Jones' Deckhand",
        description: "Unleash outrageous counter-attack chains in this swashbuckling adventure where every voyage is a brutal roguelike deckbuilder. Will you break free from Davy Jones' locker?",
        url: "https://cassbaygames.com",
        image: "https://cassbaygames.com/Cass_Bay_Games_website_preview_image.jpg"
    };

    return (
        <Script id="json-ld" type="application/ld+json" strategy="beforeInteractive">
            {JSON.stringify(jsonLd)}
        </Script>
    );
}
