import React from 'react';

const FadingFooter: React.FC = () => {

    return (
        <footer className="w-full relative overflow-hidden">
            <div
                className="relative w-full px-6 pt-16 pb-24 z-20"
                style={{
                    minHeight: '100px',
                }}
            >
                <div
                    className="absolute bottom-0 left-0 w-1/3 h-1/2 rounded-full blur-3xl opacity-30"
                    style={{
                        background: 'linear-gradient(90deg, #6c5ce7 0%, rgba(255, 255, 255, 0) 100%)',
                        transform: 'translate(-50%, 50%)',
                        zIndex: 1
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto flex justify-end gap-6 text-sm">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        MIT Licence - @2025 - 2026 by plos-clan
                    </a>
                    <a
                        href="https://docs.plos-clan.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition flex items-center gap-1"
                    >
                        <span className="text-lg">🔗</span>
                        LinkedIn
                        <span className="text-xs">↗</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default FadingFooter;