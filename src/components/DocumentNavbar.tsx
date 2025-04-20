import Image from "next/image"
import Link from "next/link"
import {useState} from "react";

const NAV_LINKS = [
    { href: '/', name: 'Home' },
    { href: '/community', name: 'Community' },
    { href: 'https://docs.plos-clan.org/project/coolpotos.html', name: 'plos-clan' },
    { href: '/releases', name: 'Releases' },
    { href: '/document', name: 'Document' },
];

export default function DocumentNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-neutral-900/80 shadow-md transition-all hover:shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                            <Image
                                src="/icon.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8 rounded-lg"
                            />
                            <span className="ml-2 text-xl font-bold text-white">
            CoolPotOS
          </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 transition-colors font-medium text-sm px-3 py-1.5 rounded-lg hover:bg-neutral-800"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-600 hover:text-white"
                        >
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-neutral-900 rounded-b-2xl shadow-md">
                    <div className="px-4 py-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium text-lg px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}