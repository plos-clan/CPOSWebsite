
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

export function dedent(str: string) {
    const lines = str.split('\n');
    while (lines.length > 0 && lines[0].trim() === '') lines.shift();
    while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop();
    const indentLengths = lines
        .filter(line => line.trim() !== '')
        .map(line => line.match(/^ */)![0].length);
    const minIndent = Math.min(...indentLengths);
    const unindented = lines.map(line => line.slice(minIndent));
    return unindented.join('\n');
}
