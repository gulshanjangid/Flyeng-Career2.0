import { GithubRoasterClient } from "@/components/github-roaster-client"

export const metadata = {
    title: "GitHub Roaster | Flyeng Career",
    description: "Brutal AI roasts your GitHub profile & repos to tell you why your code gets ignored.",
}

export default function GithubRoasterPage() {
    return <GithubRoasterClient />
}
