import { NextResponse } from "next/server"

export const runtime = 'edge';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const REPO = "xiaoyi1212/CoolPotOS"
const GITHUB_API_URL = `https://api.github.com/repos/${REPO}`

export async function GET() {
    try {
        const headers = {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "User-Agent": "CoolPotOS-App"
        }

        const repoRes = await fetch(GITHUB_API_URL, { headers })
        const repoData = await repoRes.json()

        const contributorsRes = await fetch(`${GITHUB_API_URL}/contributors`, { headers })
        const contributorsData = await contributorsRes.json()

        return NextResponse.json({
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            watchers: repoData.subscribers_count,
            contributors: Array.isArray(contributorsData) ? contributorsData.length : 0,
        })
    } catch (e) {
        console.error("[GitHub API Error]", e)
        return NextResponse.json({ error: "GitHub fetch failed" }, { status: 500 })
    }
}