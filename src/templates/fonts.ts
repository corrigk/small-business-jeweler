import {
  Cormorant_Garamond,
  Fraunces,
  Inter,
  Jost,
  Lato,
  Manrope,
  Marcellus,
  Nunito,
} from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-lato" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const marcellus = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-marcellus" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const fontClasses = {
  classic: `${cormorant.variable} ${lato.variable}`,
  minimal: `${jost.variable} ${inter.variable}`,
  heritage: `${fraunces.variable} ${nunito.variable}`,
  dark: `${marcellus.variable} ${manrope.variable}`,
} as const;
