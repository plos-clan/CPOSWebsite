
export function StrikethroughText({ children }: { children: React.ReactNode }) {
    return <span className="line-through text-neutral-400">{children}</span>
}

export function CodeLine({children}:{children: React.ReactNode}){
    return(
        <code className="bg-neutral-800 rounded-md p-0.5 font-mono">
            {children}
        </code>
    )
}
