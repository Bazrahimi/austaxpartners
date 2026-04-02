import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";

export const uiFond = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const headingFont = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const bodyFont = uiFond;