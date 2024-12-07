import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clone Tabnews",
  description: "Clone do site Tabnews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
