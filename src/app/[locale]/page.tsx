import TableHome from "@/components/TableHome";
import {CalendarExample} from "@/components/calendar-task";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <div className="flex justify-end mb-4">
                <Button>Button</Button>
            </div>
            <div>
                <CalendarExample />
                <TableHome />
            </div>
        </div>
    );
}
