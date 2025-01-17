import TableHome from "@/components/TableHome";
import { CalendarExample } from "@/components/calendar-task";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <div className="flex justify-end mb-4">
                <Button>Button</Button>
            </div>

            <div className="flex flex-col gap-4 [@media(min-width:1035px)]:flex-row">
                <div className="flex-1">
                    <CalendarExample/>
                </div>
                <div className="flex-1">
                    <TableHome/>
                </div>
            </div>

        </div>
    );
}
