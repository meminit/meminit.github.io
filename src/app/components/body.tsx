import { ReactNode } from "react";

type props = {children: ReactNode, className: string}

export default function defaultBody({ children, className }: props) {
    return (
        <body className={"bg-zinc-900 m-0 flex flex-col overflow-auto" + className}>
            {children}
        </body>
    )
}