"use client";

import React from "react";
import {useSidebar} from "@/components/ui/sidebar";
import moment from "moment";
import {Calendar} from "@/components/ui/simple_calendar";

export default function AppCalendar() {
    const { open } = useSidebar()

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <>
            {open ? (
                <div>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border w-full"
                    />
                </div>
            ) : (
                <div>
                    <span className="flex rounded-sm bg-primary h-8 w-8 justify-center items-center text-white">
                        {moment(date).format("DD")}
                    </span>
                </div>
            )}
        </>
    )
}