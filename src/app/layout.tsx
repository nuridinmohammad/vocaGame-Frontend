import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { ThemeProvider } from "@/lib/ThemeProvider";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VocaGame",
  description:
    "VocaGame menyediakan layanan Top up game dan Reseller Voucher Game termurah dan terpercaya di Indonesia. Topup lebih dari 100 game online terkemuka dunia di VocaGame mudah aman tanpa registrasi, pembelian instan langsung masuk dalam hitungan detik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={plus_jakarta_sans.className}>
          <StoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
