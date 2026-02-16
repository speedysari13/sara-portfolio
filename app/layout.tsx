import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

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
      <body className="min-h-screen flex flex-col">
  <div className="flex-1">
    {children}
  </div>
  <SiteFooter />
</body>
    </html>
  );
}