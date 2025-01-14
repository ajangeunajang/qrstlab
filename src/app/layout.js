import "./globals.css";
import Head from "next/head";
import Nav from "./components/nav.js";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Head>
        <meta
          name="keywords"
          content="심규하, Q shim, 한예종, QRST, 디자인과, 컨버전스, karts, design"
        />
        <meta name="description" content="QrST Lab" />

        {/* Favicon 링크 */}
        {/* <link rel="shortcut icon" href="asset/pavicon.svg" /> */}
        {/* Open Graph meta tags */}
        <meta property="og:title" content="QrST Lab" />
        {/* <meta property="og:image" content="img/noise.png" /> */}
        <meta
          property="og:description"
          content="Design Convergence Collective QrST"
        />

        <link rel="stylesheet" href="https://use.typekit.net/uck1tni.css" />
      </Head>
      <body className="antialiased" style={{ fontFamily: 'var(--font-pretendard)' }}>
        {children}
      </body>
    </html>
  );
}
