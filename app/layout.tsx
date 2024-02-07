import type { Metadata } from "next";
import "./tachyons.min.css";
import localFont from "next/font/local";
import "./globals.css";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./fonts/Robotronics.woff",
  display: "swap",
  variable: "--font-robotronics",
  style: "normal",
  weight: "normal",
});

export const metadata: Metadata = {
  title: "My Robofriends",
  description: "The app displays a list of cards with robots",
  authors: [{ name: "Farkhad Maten" }],
  applicationName: "My Robofriends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${myFont.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
