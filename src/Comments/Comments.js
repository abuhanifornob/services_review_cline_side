import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Comments = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>This is Comment Section</h1>
        </div>
    );
};

export default Comments;