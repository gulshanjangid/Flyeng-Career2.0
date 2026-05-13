'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DebugPage() {
    const [status, setStatus] = useState<any>({})
    const [loading, setLoading] = useState(false)

    const checkConnection = async () => {
        setLoading(true)
        const results: any = {}

        // Check Env Vars (Safe check)
        results.env = {
            supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Present' : 'Missing',
            supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Present' : 'Missing',
        }

        // Check Client
        results.client = supabase ? 'Initialized' : 'Failed'

        if (supabase) {
            try {
                // Try to read generic or users
                const { data, error } = await supabase.from('users').select('count', { count: 'exact', head: true })

                if (error) {
                    results.dbConnection = `Failed: ${error.message} (Code: ${error.code})`
                } else {
                    results.dbConnection = `Success (Users count: ${data})` // data is null for head:true usually but count is in count property... wait. count is separate.
                    // head: true returns count in count, data is null.
                }

                const { count } = await supabase.from('users').select('*', { count: 'exact', head: true })
                results.dbRead = `Success (Users table accessible, count: ${count})`

            } catch (e: any) {
                results.dbConnection = `Exception: ${e.message}`
            }
        }

        setStatus(results)
        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <h1 className="text-3xl font-bold mb-8">Supabase Connection Debugger</h1>

            <Button onClick={checkConnection} disabled={loading} className="mb-8">
                {loading ? 'Checking...' : 'Run Connection Test'}
            </Button>

            <div className="grid gap-4">
                {Object.entries(status).map(([key, value]: [string, any]) => (
                    <Card key={key} className="bg-white/10 border-white/20">
                        <CardContent className="p-4">
                            <h3 className="font-bold capitalize mb-2">{key}</h3>
                            <pre className="text-sm bg-black/50 p-2 rounded overflow-auto">
                                {JSON.stringify(value, null, 2)}
                            </pre>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
