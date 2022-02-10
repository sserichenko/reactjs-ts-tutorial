import React from 'react';

type CustomInputProps = React.ComponentProps<"input">

const CustomInput = (props: CustomInputProps) => {
    return (
        <div>
            <input type="text" {...props}/>
        </div>
    );
};

export default CustomInput;