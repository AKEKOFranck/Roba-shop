import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

/* =========================================================
   TYPOGRAPHIES
========================================================= */

/*
  Cormorant Garamond
  → Logo
  → Titres
  → Slogans
  → Éléments premium
*/

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/*
  Montserrat
  → Navigation
  → Boutons
  → Descriptions
  → Prix
  → Informations produits
*/

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});


/* =========================================================
   METADATA
========================================================= */

export const metadata = {

  /*
    URL principale du site.
    Important : ne pas laisser new URL("").
  */
  metadataBase: new URL("https://roba-shop.vercel.app/"),

  /* =========================
     TITRE
  ========================= */

  title: {
    default: "Roba Shop | L'élégance a son parfum",
    template: "%s | Roba Shop",
  },

  /* =========================
     DESCRIPTION
  ========================= */

  description:
    "Roba Shop, votre parfumerie en ligne à Abidjan. Découvrez une sélection de parfums élégants pour femme et homme, choisis pour révéler votre personnalité et votre style.",

  /* =========================
     MOTS-CLÉS
  ========================= */

  keywords: [
    "Roba Shop",
    "Roba Shop Abidjan",
    "parfum Abidjan",
    "parfumerie Abidjan",
    "parfum femme Abidjan",
    "parfum homme Abidjan",
    "parfum en ligne Abidjan",
    "acheter parfum Abidjan",
    "parfum Côte d'Ivoire",
    "parfumerie Côte d'Ivoire",
    "parfums Côte d'Ivoire",
    "boutique parfum Abidjan",
    "parfumerie en ligne Côte d'Ivoire",
  ],

  /* =========================
     AUTEUR
  ========================= */

  authors: [
    {
      name: "Roba Shop",
      url: "https://roba-shop.vercel.app/",
    },
  ],

  creator: "Roba Shop",
  publisher: "Roba Shop",

  /* =========================
     URL CANONIQUE
  ========================= */

  alternates: {
    canonical: "/",
  },

  /* =========================
     LANGUES
  ========================= */

  category: "shopping",

  /* =========================
     OPEN GRAPH
  ========================= */

  openGraph: {

    type: "website",

    locale: "fr_CI",

    url: "https://roba-shop.vercel.app/",

    siteName: "Roba Shop",

    title: "Roba Shop | L'élégance a son parfum",

    description:
      "Découvrez l'univers de Roba Shop, votre parfumerie en ligne à Abidjan.",

    /*
      Lorsque tu auras ton image :
      /og-image.jpg

      Dimensions recommandées :
      1200 × 630 px
    */

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roba Shop — L'élégance a son parfum",
      },
    ],
  },

  /* =========================
     TWITTER / X
  ========================= */

  twitter: {

    card: "summary_large_image",

    title: "Roba Shop | L'élégance a son parfum",

    description:
      "Parfumerie en ligne à Abidjan. Découvrez une sélection de fragrances élégantes pour femme et homme.",

    images: ["/og-image.jpg"],
  },

  /* =========================
     ROBOTS
  ========================= */

  robots: {

    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* =========================
     ICÔNES
  ========================= */

  icons: {
    icon: "/LogoPerfume.ico",
    shortcut: "/LogoPerfume.ico",
    apple: "/LogoPerfume.png",
  },

  /* =========================
     AUTRES INFORMATIONS
  ========================= */

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};


/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({ children }) {

  return (
    <html lang="fr">

      <body
        className={`${cormorant.variable} ${montserrat.variable}`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>

    </html>
  );
}