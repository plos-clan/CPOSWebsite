import {ReactNode} from "react";

type MarkdownListProps = {
    items: ReactNode[]
}

export default function MarkdownList({ items }: MarkdownListProps) {
    return (
        <ul className="list-disc pl-5 space-y-1 pt-4 text-neutral-300">
            {items.map((item, index) => (
                <li key={index} className="mt-4">
                    {item}
                </li>
            ))}
        </ul>
    )
}