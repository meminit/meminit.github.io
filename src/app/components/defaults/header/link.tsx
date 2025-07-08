import React from 'react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ children, ...props }) => (
    <a {...props} className={props.className + "no-underline px-[20px] text-[20px] flex flex-row gap-1 justify-center items-center transition-all hover:bg-zinc-500 rounded-br-2xl rounded-tl-2xl"}>{children}</a>
);

export default Link;