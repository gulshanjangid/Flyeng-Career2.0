"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface ActivityChartProps {
    data?: any[]
}

export function ActivityChart({ data }: ActivityChartProps) {
    // Fallback data for empty state or loading (but ideally handled by parent)
    const chartData = data && data.length > 0 ? data : [
        { name: "Mon", total: 0 },
        { name: "Tue", total: 0 },
        { name: "Wed", total: 0 },
        { name: "Thu", total: 0 },
        { name: "Fri", total: 0 },
        { name: "Sat", total: 0 },
        { name: "Sun", total: 0 },
    ]

    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                    contentStyle={{ backgroundColor: "#1f2937", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-cyan-500"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}
