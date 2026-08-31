import Image from 'next/image'

interface Contributor {
    name: string
    avatar: string
    website?: string
    role: string
    desc: string
}

interface ContributorGridProps {
    items: readonly Contributor[]
}

export function ContributorGrid({ items }: ContributorGridProps) {
    if (items.length === 0) return null

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {items.map((contributor) => (
                <div
                    key={contributor.name}
                    className="flex items-center rounded-xl border border-gray-200 bg-gray-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50"
                >
                    <Image
                        src={contributor.avatar}
                        alt={contributor.name}
                        width={56}
                        height={56}
                        className="mr-4 size-14 rounded-full border border-gray-100 object-cover dark:border-neutral-700"
                    />
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                            <h4 className="font-bold text-gray-900 dark:text-gray-100 truncate">{contributor.name}</h4>
                            {contributor.website && (
                                <a
                                    href={contributor.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Visit ${contributor.name}'s profile`}
                                    className="text-gray-400 hover:text-blue-500"
                                >
                                    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            )}
                        </div>
                        <p className="text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">{contributor.role}</p>
                        <p className="mt-0.5 truncate text-sm text-gray-500 dark:text-gray-400">{contributor.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
