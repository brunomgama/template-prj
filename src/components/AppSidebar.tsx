import {Calendar, Home, Inbox, Search, Settings} from "lucide-react"
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {ThemeModeToggle} from "@/components/theme-mode-toggle";
import {ThemeColorToggle} from "@/components/theme-color-toggle";
import {LanguageToggle} from "@/components/language-toggle";
import AppCalendar from "@/components/AppCalendar";

const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
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
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
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
