export default function FadingFooter() {
    return (
        <footer className="relative w-full overflow-hidden">
            <div aria-hidden className="absolute bottom-0 left-0 h-1/2 w-1/3 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/30 to-transparent blur-3xl" />
            <div className="relative z-10 mx-auto flex min-h-25 max-w-7xl flex-col items-center justify-end gap-6 px-6 pb-24 pt-16 text-center text-sm sm:flex-row sm:text-left">
                <p className="text-gray-400">
                    MIT License · © 2025–2026 plos-clan · Built with Next.js and Nextra
                </p>
                <a
                    href="https://docs.plos-clan.org"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-gray-300 transition hover:text-white"
                >
                    Documentation ↗
                </a>
            </div>
        </footer>
    )
}
