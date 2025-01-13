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
import {ThemeModeToggle} from "@/components/theme-mode-toggle";
import {ThemeColorToggle} from "@/components/theme-color-toggle";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

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


                <ThemeModeToggle/>
                <ThemeColorToggle/>
            </div>


            <div>

                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle className={"text-primary"}>Create project</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Name of your project" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="framework">Framework</Label>
                                    <Select>
                                        <SelectTrigger id="framework">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="next">Next.js</SelectItem>
                                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                            <SelectItem value="astro">Astro</SelectItem>
                                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Deploy</Button>
                    </CardFooter>
                </Card>


            </div>
        </div>
    );
}
