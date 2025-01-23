"use client"

import { useEffect, useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface Event {
    id: number
    name: string
    start_date?: string | null
    end_date?: string | null
    category_id?: number | null
}

export default function TableHome() {
    const [tasks, setTasks] = useState<Event[]>([])

    useEffect(() => {
        async function fetchEvents() {
            try {
                const res = await fetch("/api/events")
                if (!res.ok) {
                    console.error("API error", res.status, await res.text())
                    return
                }
                const data = await res.json()
                setTasks(data.events || [])
            } catch (err) {
                console.error("Fetch failed", err)
            }
        }

        fetchEvents()
    }, [])

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                { tasks.map((task) => (
                    <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.id}</TableCell>
                        <TableCell>{task.name}</TableCell>
                        <TableCell>{task.start_date}</TableCell>
                        <TableCell>{task.end_date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
