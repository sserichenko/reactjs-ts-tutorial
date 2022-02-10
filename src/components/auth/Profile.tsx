import React from 'react';
export type ProfileProps = {
    name: string;
}

const Profile = ({name}: ProfileProps) => {
    return (
        <div>
            Private profile component. Name is <strong>{name}</strong>.
        </div>
    );
};

export default Profile;