import AuthProvider from "@/context/AuthProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infracidadão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <StyledComponentsRegistry>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </StyledComponentsRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
