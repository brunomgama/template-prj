"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            className="h-[2.5rem] flex items-center justify-center gap-x-2 w-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="group-data-[collapsible=icon]:hidden">Change Theme</span>
        </Button>
    );
}
