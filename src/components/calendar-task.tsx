"use client";

import React, { useEffect, useState } from "react";
import {
    CalendarBody,
    CalendarDate,
    CalendarDatePagination,
    CalendarDatePicker,
    CalendarHeader,
    CalendarItem,
    CalendarMonthPicker,
    CalendarProvider,
} from "@/components/ui/calendar";

type Status = {
    id: string;
    name: string;
    color: string;
};

type Feature = {
    id: string;
    name: string;
    start_date: Date;
    end_date: Date;
    status: Status;
};

interface DBEvent {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    category_id?: number | null;
}

const BigCalendar: React.FC = () => {
    const [events, setEvents] = useState<DBEvent[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch("/api/events");
                const data = await response.json();
                setEvents(data.events);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchEvents();
    }, []);

    const adaptedFeatures: Feature[] = events.map((ev) => ({
        id: String(ev.id),
        name: ev.name,
        start_date: new Date(ev.start_date),
        end_date: new Date(ev.end_date),
        status: {id: "1", name: "Planned", color: "#6B7280"},
    }));

    return (
        <div className="bg-background border rounded-md max-w-3xl p-4">
            <CalendarProvider>
                <CalendarDate>
                    <CalendarDatePicker>
                        <CalendarMonthPicker />
                    </CalendarDatePicker>
                    <CalendarDatePagination />
                </CalendarDate>
                <CalendarHeader />
                <CalendarBody features={adaptedFeatures}>
                    {({ feature }) => (
                        <CalendarItem key={feature.id} feature={feature} />
                    )}
                </CalendarBody>
            </CalendarProvider>
        </div>
    );
};

export { BigCalendar };
