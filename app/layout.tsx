import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppContextProvider } from "@/lib/context/AppContext";
import QuickViewModal from "@/components/ui/QuickViewModal";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "SafeNet & Co. | Premium Safety Nets & Invisible Grills",
  description: "India's leading provider of high-quality safety net systems, SS316 invisible grills, bird netting, mosquito screens, and motorized zip screens. Secure your home with elegance.",
  icons: {
    icon: "/images/products/logo_icon.webp",
    shortcut: "/images/products/logo_icon.webp",
    apple: "/images/products/logo_icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <AppContextProvider>
          {children}
          <QuickViewModal />
          <FloatingContactButtons />
        </AppContextProvider>
      </body>
    </html>
  );
}

