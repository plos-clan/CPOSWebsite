import { StaticIcon } from '@/app/components/StaticIcon'

const meta = {
    index: {
        title: 'Home',
        type: 'page',
        display: 'hidden'
    },
    docs: {
        title:
            <span className="flex items-center">
                <StaticIcon src="/wrench.svg" alt="" />
                CoolPotOS
            </span>,
    },
    source: {
        title:
            <span className="flex items-center">
                <StaticIcon src="/book.svg" alt="" />
                Source Code
            </span>
    },
    sima: {
        title:
            <span className="flex items-center">
                <StaticIcon src="/cog.svg" alt="" />
                SIMA
            </span>
    },
    '---': {
        type: 'separator'
    },
    contributors: {
        title:
            <span className="flex items-center">
                <StaticIcon src="/heart.svg" alt="" />
                Contributor
            </span>
    }
}

export default meta
