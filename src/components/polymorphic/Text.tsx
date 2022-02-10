import React from 'react';

type TextComponentOwnProps<E extends React.ElementType> = {
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary";
    children: React.ReactNode;
    as?: E
}

type TextComponentProps<E extends React.ElementType> = TextComponentOwnProps<E> & Omit <React.ComponentProps<E>, keyof TextComponentOwnProps<E>>

const TextComponent = <E extends React.ElementType = 'div'>({size, color, children, as}: TextComponentProps<E>) => {

    const Component = as || "div"

    return (
        <Component className={`class-with-children ${size} ${color}`}>
            {children}
        </Component>
    );
};

export default TextComponent;