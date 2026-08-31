'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/app/site'

interface GitHubRepository {
    stargazers_count: number
    forks_count: number
    subscribers_count: number
}

const initialStats = {
    stars: 0,
    forks: 0,
    watchers: 0,
    contributors: 0,
}

const statItems = [
    { key: 'stars', icon: '★', label: 'Stars' },
    { key: 'forks', icon: '🍴', label: 'Forks' },
    { key: 'watchers', icon: '👁️', label: 'Watching' },
    { key: 'contributors', icon: '👥', label: 'Contributors' },
] as const

export default function GitHubStats() {
    const [stats, setStats] = useState(initialStats)

    useEffect(() => {
        const controller = new AbortController()
        const repositoryApi = `https://api.github.com/repos/${siteConfig.repository.slug}`
        const request = {
            signal: controller.signal,
            headers: { Accept: 'application/vnd.github+json' },
        }

        void Promise.all([
            fetch(repositoryApi, request),
            fetch(`${repositoryApi}/contributors?anon=true&per_page=100`, request),
        ])
            .then(async ([repositoryResponse, contributorsResponse]) => {
                if (!repositoryResponse.ok || !contributorsResponse.ok) {
                    throw new Error('GitHub API request failed')
                }

                const [repository, contributors] = await Promise.all([
                    repositoryResponse.json() as Promise<GitHubRepository>,
                    contributorsResponse.json() as Promise<unknown[]>,
                ])

                setStats({
                    stars: repository.stargazers_count,
                    forks: repository.forks_count,
                    watchers: repository.subscribers_count,
                    contributors: contributors.length,
                })
            })
            .catch((error: Error) => {
                if (error.name !== 'AbortError') console.error(error)
            })

        return () => controller.abort()
    }, [])

    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="mb-12 font-logo text-3xl font-bold text-white">GitHub Repository</h2>
                <div className="grid grid-cols-2 gap-6 rounded-2xl p-6 text-white md:grid-cols-4">
                    {statItems.map((item) => (
                        <div key={item.key} className="flex flex-col items-center">
                            <span className="text-3xl font-bold">{item.icon} {stats[item.key]}</span>
                            <span className="text-sm text-gray-400">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
