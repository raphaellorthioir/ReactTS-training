import React from 'react';
import Status from './Status';
import Heading from './Heading';
import Oscar from './Oscar';
import Greet from './Greet';

const AdvancedProps = () => {
    return (
        <div>
            <Status status='loading'></Status>
            <Heading>Placeholder text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicaprio !</Heading>
            </Oscar>
            <Greet name='raf' messageCount={10} isLoggedIn={true}></Greet>
        </div>
    );
};

export default AdvancedProps;