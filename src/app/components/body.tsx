import { ReactNode } from "react";

export default function Body({ children }: { children: ReactNode }) {
    return (
        <body className="bg-zinc-950 m-0 h-[100vh] flex flex-col">
            {children}
        </body>
    )
}