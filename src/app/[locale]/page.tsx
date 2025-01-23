import {BigCalendar} from "@/components/calendar-task";
import TableHome from "@/components/TableHome";
import EventCreateDialog from "@/components/Events/EventCreateDialog";

export default function Home() {
    return (
        <div>
            <div className="flex justify-end mb-4">
                <EventCreateDialog/>
            </div>

            <div className="flex flex-col gap-4 [@media(min-width:1035px)]:flex-row">
                <div className="flex-1">
                    <BigCalendar/>
                </div>
                <div className="flex-1">
                    <TableHome/>
                </div>
            </div>
        </div>
    );
}
