"use client";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import {useRouter} from "next/navigation";

export function LanguageToggle() {
    const router = useRouter();
    const [locale, setLocale] = useState("en");

    const handleChangeLocale = (newLocale: string) => {
        setLocale(newLocale);
        router.push(`/${newLocale}`);
    };

    return (
        <Select onValueChange={handleChangeLocale}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={locale} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
            </SelectContent>
        </Select>
    )
}