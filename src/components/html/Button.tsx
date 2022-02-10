import React from 'react';
type CustomButtonProps = {
    variant: 'primary' | 'secondary',
    children: string | number;
} & Omit<React.ComponentProps<"button">, 'children'>

const CustomButton = ({variant, children, ...rest}: CustomButtonProps) => {

    console.log('rest', rest)

    return (
        <div>
            <button className={`class-with-${variant}`} {...rest}>{children}</button>
        </div>
    );
};

export default CustomButton;