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
    <html lang="en" className="overflow-x-hidden ">

      <head>
        <title>Cryptonix</title>
        <meta name="description" content="The Vault to Safegaurd Every Information You Want To Be Secured" />
        <meta name="keywords" content="password, password manager, safe, secure, vault, encypt" />
        <meta name="autho" content="Cryptonix" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      </head>

      <SessioWrapper >

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden max-w-full`}
        >
          {children}

        </body>
      </SessioWrapper>
    </html>
  );
}
