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

interface Category {
    id: number
    name: string
}

export default function TableCategory() {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        async function fetchCategory() {
            try {
                const res = await fetch("/api/categories")
                if (!res.ok) {
                    console.error("API error", res.status, await res.text())
                    return
                }
                const data = await res.json()
                setCategories(data.categories || [])
            } catch (err) {
                console.error("Fetch failed", err)
            }
        }

        fetchCategory()
    }, [])

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {categories.map((category) => (
                    <TableRow key={category.id}>
                        <TableCell>{category.id}</TableCell>
                        <TableCell>{category.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
