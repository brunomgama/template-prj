import {useTranslations} from "next-intl";
import TableHome from "@/components/TableHome";

export default function Home() {
    const t = useTranslations("Home");

    return (
        <div>

            <TableHome />

        </div>
    );
}
