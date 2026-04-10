import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import Script from "next/script";

export const metadata = {
  title: "Sara Joyce — Conversation Design & Content Ops",
  description: "I bring order to chaos—one Oxford comma at a time."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W615HDN845"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W615HDN845');
          `}
        </Script>
      </head>

      <body className="min-h-screen flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
