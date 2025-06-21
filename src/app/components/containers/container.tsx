import { ReactNode } from "react";

export default function container({ children, className }: { children: ReactNode, className: string }) {
    return (<div className={"bg-zinc-900 w-9/10 box-border p-10 max-w-[1000px] min-h-10 " + className} >{children}</div>)
}