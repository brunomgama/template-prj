"use client";

import { useLocale } from "next-intl";
import { TbHome, TbApple, TbAffiliate } from "react-icons/tb";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import AppCalendar from "@/components/AppCalendar";
import {Link} from "@/i18n/routing";

const items = [
    {
        title: "Home",
        url: "/",
        icon: TbHome,
    },
    {
        title: "Storage",
        url: "/food",
        icon: TbApple,
    },
    {
        title: "Category",
        url: "/categories",
        icon: TbAffiliate,
    },
]

export function AppSidebar() {
    const locale = useLocale();
    return (
        <Sidebar collapsible="icon">
            <SidebarContent className="flex flex-col h-full">
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} locale={locale}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarFooter className="mt-auto flex flex-col items-center space-y-2">
                    <div className="overflow-hidden">
                        <AppCalendar/>
                    </div>
                    <LanguageToggle/>
                    <ThemeModeToggle/>
                    <div className="w-full flex justify-center">
                        <ThemeColorToggle/>
                    </div>
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    )
}
