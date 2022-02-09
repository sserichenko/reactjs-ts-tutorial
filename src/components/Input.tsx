import React from 'react';

type InputProps = {
    value: string;
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; //the case where we get handleChange from props
}

const Input = ({value}: InputProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>
        </div>
    );
};

export default Input;