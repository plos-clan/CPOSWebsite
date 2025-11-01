import {StaticIcon} from '@/app/components/StaticIcon';

export default {
    index: {
        title: 'Home',
        type: 'page',
        display: 'hidden'
    },
    docs: {
        title:
            <span className="flex items-center">
                <StaticIcon
                    src="/wrench.svg"
                    alt="文档图标"
                    size={16}
                    style={{marginRight: '6px'}}
                />
                CoolPotOS
            </span>,
    },
    source: {
        title:
            <span className="flex items-center">
                <StaticIcon
                    src="/book.svg"
                    alt="文档图标"
                    size={16}
                    style={{marginRight: '6px'}}
                />
                Source Code
            </span>
    },
    sima: {
        title:
            <span className="flex items-center">
                <StaticIcon
                    src="/cog.svg"
                    alt="文档图标"
                    size={16}
                    style={{marginRight: '6px'}}
                />
                SIMA
            </span>
    },
    '---': {
        type: 'separator'
    },
    contributors: {
        title: <span className="flex items-center">
                <StaticIcon
                    src="/heart.svg"
                    alt="文档图标"
                    size={16}
                    style={{marginRight: '6px'}}
                />
                贡献
            </span>
    },
}