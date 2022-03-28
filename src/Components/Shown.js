import React from 'react';

function Shown(props) {
    
    const { user } = props;
    
    return (
        <h1>This is the landing page for everyone! Hello, {user}</h1>
    )
};

export default Shown;