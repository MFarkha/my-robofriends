import type { Metadata } from "next";
import "./globals.css";
import './tachyons.min.css';

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
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
