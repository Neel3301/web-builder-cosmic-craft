import { Titillium_Web } from "next/font/google";
import { Salsa } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Volkhov } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { Open_Sans } from "next/font/google";

const titillium_Web = Titillium_Web({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto_Mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const salsa = Salsa({ weight: ["400"], subsets: ["latin"] });

const open_Sans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

export {
  poppins,
  roboto_Mono,
  titillium_Web,
  volkhov,
  montserrat,
  salsa,
  open_Sans,
};
