import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AppointmentModalProvider } from "@/components/ui/AppointmentModalProvider";

export const metadata: Metadata = {
  title: {
    default: "St. Elizabeth Catholic Hospital | Hwidiem, Ghana",
    template: "%s | St. Elizabeth Catholic Hospital",
  },
  description:
    "St. Elizabeth Catholic Hospital (SECH) provides world-class, compassionate Catholic healthcare to the communities of Ghana's Ahafo Region. A CHAG member institution.",
  keywords: ["hospital", "Ghana", "CHAG", "Hwidiem", "healthcare", "Catholic hospital"],
  openGraph: {
    title: "St. Elizabeth Catholic Hospital",
    description: "Healing with Faith & Excellence — Ahafo Region, Ghana",
    url: "https://sech-gh.org",
    siteName: "SECH Ghana",
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppointmentModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
       </AppointmentModalProvider> 
      </body>
    </html>
  );
}
