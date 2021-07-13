import React, {useState} from 'react';

export const Child = () => {
    const [click, setClick] = useState(0)

    console.log('Child Render Called')
    return (
        <div>
            <button onClick={() => setClick(click + 1)}>Child Button Click {click}</button>
        </div>
    );
};
