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

interface Task {
    id: number
    title: string
    due_date?: string | null
    user_id?: number | null
    categoryId?: number | null
}

interface User {
    id: number
    name: string
    email?: string
}

export default function TableHome() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        async function fetchTasks() {
            try {
                const res = await fetch("/api/tasks")
                if (!res.ok) {
                    console.error("API error", res.status, await res.text())
                    return
                }
                const data = await res.json()
                setTasks(data.tasks || [])
            } catch (err) {
                console.error("Fetch failed", err)
            }
        }

        fetchTasks()
    }, [])

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch("/api/users")
                if (!res.ok) {
                    console.error("API error", res.status, await res.text())
                    return
                }
                const data = await res.json()
                setUsers(data.users || [])
            } catch (err) {
                console.error("Fetch failed", err)
            }
        }

        fetchUsers()
    }, [tasks])

    const tableRows = tasks.map((task) => {
        const userName = users.find((u) => u.id === task.user_id)?.name || "N/A"
        return (
            <TableRow key={task.id}>
                <TableCell className="font-medium">{task.id}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.due_date || "N/A"}</TableCell>
                <TableCell>{userName}</TableCell>
            </TableRow>
        )
    })

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>User</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableRows}
            </TableBody>
        </Table>
    )
}
