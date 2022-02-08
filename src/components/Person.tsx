import React from 'react';

type PersonProps = {
    name: {
        firstName: string,
        lastName: string
    }
}

const Person = (props: PersonProps) => {
    return (
        <div>
            <p>{props.name.firstName} {props.name.lastName}</p>
        </div>
    );
};

export default Person;