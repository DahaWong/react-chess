import "./globals.css";
import * as SITE from "@/lib/constants";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center p-20">
        <main>{children}</main>
      </body>
    </html>
  );
}

export const metadata = {
  // keywords: [""],
  authors: ["Daha"],
  creator: "Daha",
  publisher: "Daha",
  generator: "NextJS",
  formatDetection: {
    email: "no",
    address: "no",
    telephone: "no",
  },
  title: {
    default: SITE.TITLE,
    template: `%s · ${SITE.TITLE}`,
  },
  description: SITE.DESCRIPTION,
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": "standard",
      "max-image-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    url: SITE.URL,
    siteName: SITE.TITLE,
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: SITE.LOCALE,
    type: "website",
  },
  icons: {
    icon: ["/favicon-32x32.png", "/favicon-16x16.png"],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: SITE.TITLE,
  //   description: SITE.DESCRIPTION,
  //   // siteId: "1467726470533754880",
  //   creator: SITE.AUTHOR_TWITTER,
  //   // creatorId: "1467726470533754880",
  //   images: [`${SITE.URL}/og.png`],
  //   app: {
  //     name: "twitter_app",
  //     id: {
  //       iphone: "twitter_app://iphone",
  //       ipad: "twitter_app://ipad",
  //       googleplay: "twitter_app://googleplay",
  //     },
  //     url: {
  //       iphone: "https://iphone_url",
  //       ipad: "https://ipad_url",
  //     },
  //   },
  //   verification: {
  //     google: "google",
  //     yandex: "yandex",
  //     yahoo: "yahoo",
  //     other: {
  //       me: [SITE.EMAIL, SITE.URL],
  //     },
  //   },
  //   alternates: {
  //     canonical: SITE.URL,
  //     // languages: {
  //     //   "en-US": "https://nextjs.org/en-US",
  //     //   "de-DE": "https://nextjs.org/de-DE",
  //     // },
  //     types: {
  //       "application/rss+xml": `${SITE.URL}/feed`,
  //     },
  //   },
  //   // appleWebApp: {
  //   //   title: SITE.TITLE,
  //   //   statusBarStyle: "black-translucent",
  //   //   startupImage: [
  //   //     "/assets/startup/apple-touch-startup-image-768x1004.png",
  //   //     {
  //   //       url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
  //   //       media: "(device-width: 768px) and (device-height: 1024px)",
  //   //     },
  //   //   ],
  //   // },
  // },
};
