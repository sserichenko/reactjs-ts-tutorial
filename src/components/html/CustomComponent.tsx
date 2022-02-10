import React from 'react';
import Greet from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => { //extract types of props from another component
    return (
        <div>
            {props.isLoggedIn ? (<h2>Now we are using the Greet component props types in CustomComponent with name {props.name}</h2>) : "We are NOT LOGGEDIN!"}
        </div>
    );
};

export default CustomComponent;