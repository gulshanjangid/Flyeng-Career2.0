import { DashboardMain } from "@/components/dashboard/dashboard-main"

export default function DashboardPage() {
    return (
        // The layout handles the container, sidebar, and mobile header. 
        // We just need to render the main dashboard content.
        <div className="w-full relative z-10">
            <DashboardMain />
        </div>
    )
}
