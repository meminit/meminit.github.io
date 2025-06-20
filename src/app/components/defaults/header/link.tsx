import React from 'react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ children, ...props }) => (
    <a {...props} className={props.className + "no-underline px-[10px] text-[18px] flex flex-row gap-1 justify-center items-center"}>{children}</a>
);

export default Link;