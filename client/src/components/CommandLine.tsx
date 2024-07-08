interface prop {
    terminalName?: string
    command?: string
    resultLines?: string[]
}
export default function CommandLine({terminalName, command, resultLines}: prop) {
    return (
        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="text-sm">{terminalName || "bash"}</p>
            </div>
            <div className="mt-4">
                <p className="text-green-400">$ {command || "npm install next"}</p>
                <p className="text-white">+ next@10.2.3</p>
                <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
                {resultLines?.map(line => <p className="text-white">{line}</p>)}
                <p className="text-green-400">$</p>
            </div>
        </aside>
    )
}