import type { Metadata } from "next";
import "./globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeDataProvider from "../../../context/theme-data-provider";
import {AppSidebar} from "@/components/AppSidebar";
import { SidebarProvider} from "@/components/ui/sidebar";
import AppHeader from "@/components/AppHeader";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({children, params}: {
    children: React.ReactNode;
    params: { locale: string };
}) {

    const { locale } = await params

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
        <body>
        <NextIntlClientProvider messages={messages}>
            <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                <ThemeDataProvider>
                    <SidebarProvider>
                        <AppSidebar />
                        <div className="flex flex-col w-full h-screen">
                            <AppHeader />
                            <main className="flex-grow overflow-auto p-4">
                                {children}
                            </main>
                        </div>
                    </SidebarProvider>
                </ThemeDataProvider>
            </NextThemesProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
