import Image, { type ImageProps } from 'next/image'

interface StaticIconProps extends Pick<ImageProps, 'src' | 'alt'> {
    size?: number
    className?: string
}

export function StaticIcon({ src, alt, size = 16, className = '' }: StaticIconProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={`mr-1.5 align-middle dark:grayscale dark:invert ${className}`.trim()}
        />
    )
}
