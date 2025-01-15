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

interface Food {
    id: number
    name: string
    quantity: number
    category_id?: number
}

interface Category {
    id: number
    name: string
}

export default function TableFood() {
    const [foodElements, setFoodElements] = useState<Food[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        async function fetchFoodElements() {
            try {
                const res = await fetch("/api/food")
                if (!res.ok) {
                    console.error("API error", res.status, await res.text())
                    return
                }
                const data = await res.json()
                setFoodElements(data.foodElements || [])
            } catch (err) {
                console.error("Fetch failed", err)
            }
        }

        fetchFoodElements()
    }, [])

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
    }, [foodElements])

    console.log(categories)

    const tableRows = foodElements.map((food) => {
        const category = categories.find((u) => u.id === food.category_id)?.name || "N/A"
        return (
            <TableRow key={food.id}>
                <TableCell className="font-medium">{food.id}</TableCell>
                <TableCell>{food.name}</TableCell>
                <TableCell>{food.quantity}</TableCell>
                <TableCell>{category}</TableCell>
            </TableRow>
        )
    })

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Category</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableRows}
            </TableBody>
        </Table>
    )
}
