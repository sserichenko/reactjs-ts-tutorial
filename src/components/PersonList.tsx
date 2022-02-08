import React from 'react';

type PersonListProps = {
    names: 
        {
            first: string,
            last: string
        }[]
}

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
               props.names?.map((name, index) => (
                <h2 key={index + Date.now()}>{name.first} {name.last}</h2>
            )) 
            }
        </div>
    );
};

export default PersonList;