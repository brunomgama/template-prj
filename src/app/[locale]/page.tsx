"use client"

import {useTranslations} from "next-intl";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const t = useTranslations("Home");
    const [locale, setLocale] = useState("en");

    const handleChangeLocale = (newLocale: string) => {
        setLocale(newLocale);
        router.push(`/${newLocale}`);
    };

    return (
        <div>
            <h1>{t('title')}</h1>

            <div className={"ml-6 mt-6"}>
                <Select onValueChange={handleChangeLocale}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
