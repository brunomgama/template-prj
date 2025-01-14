"use client";
import * as React from "react";
import {Select, SelectContent,
    SelectItem, SelectTrigger} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useThemeContext } from "../../context/theme-data-provider";

const availableThemeColors = [
    { name: "Zinc", light: "bg-zinc-900", dark: "bg-zinc-700" },
    { name: "Rose", light: "bg-rose-600", dark: "bg-rose-700" },
    { name: "Blue", light: "bg-blue-600", dark: "bg-blue-700" },
    { name: "Green", light: "bg-green-600", dark: "bg-green-500" },
    { name: "Orange", light: "bg-orange-500", dark: "bg-orange-700" },
];

export function ThemeColorToggle() {
    const { themeColor, setThemeColor } = useThemeContext();
    const { theme } = useTheme();

    const createSelectItems = () => {
        return availableThemeColors.map(({ name, light, dark }) => (
            <SelectItem key={name} value={name}>
                <div className="flex items-center space-x-3">
                    <div className={cn("rounded-full", "w-[20px]", "h-[20px]", theme === "light" ? light : dark)} />
                    <span className="text-sm group-data-[collapsible=icon]:hidden">{name}</span>
                </div>
            </SelectItem>
        ));
    };

    return (
        <Select
            onValueChange={(value) => setThemeColor(value as ThemeColors)}
            defaultValue={themeColor}
        >
            <SelectTrigger className="w-full flex items-center justify-center gap-2 p-2 ring-offset-transparent focus:ring-transparent">
                <div className="flex items-center gap-x-2">
                    <div
                        className={cn(
                            "rounded-full",
                            "w-5 h-5",
                            theme === "light"
                                ? availableThemeColors.find((c) => c.name === themeColor)?.light
                                : availableThemeColors.find((c) => c.name === themeColor)?.dark
                        )}
                    />
                    <span className="text-sm group-data-[collapsible=icon]:hidden">{themeColor}</span>
                </div>
            </SelectTrigger>

            <SelectContent className="border-muted">{createSelectItems()}</SelectContent>
        </Select>
    );
}