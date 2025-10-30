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
                    src="/globe.svg"
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
    '---': {
        type: 'separator'
    },
    contributors: {
        title: "贡献"
    },
}