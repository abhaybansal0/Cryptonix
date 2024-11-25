import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import SessioWrapper from "./component/SessionWrapper";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cryptonix - The Vault",
  description: "One Safe Vault For All Your Secreates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      </head>

      <SessioWrapper >

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}

        </body>
      </SessioWrapper>
    </html>
  );
}
