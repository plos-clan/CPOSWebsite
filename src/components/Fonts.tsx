import localFont from 'next/font/local'

export const logoFont = localFont({
    src: [
        {
            path: '../../public/fonts/logo_font.ttf',
            weight: '400',
            style: 'normal',
        }
    ],
    display: 'swap',
    variable: '--font-coolpot',
    preload: true,
})