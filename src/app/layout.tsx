import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
