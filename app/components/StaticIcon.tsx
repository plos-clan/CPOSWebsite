import React from 'react';
import Image from 'next/image';

interface StaticIconProps {
    src: string;
    alt: string;
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const StaticIcon: React.FC<StaticIconProps> = ({
                                                          src,
                                                          alt,
                                                          size = 16,
                                                          className,
                                                          style
                                                      }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={`${className || ''}
            dark:invert dark:grayscale`}
            style={{
                marginRight: '6px',
                verticalAlign: 'middle',
                ...style
            }}
        />
    );
};