import React, { useState, useCallback } from 'react';
import { times } from 'lodash';

const INSTANCE_COUNT = 100;

const CallbackHandler = ({ constantText, dynamicText }) => {
    const onClick = useCallback(() => console.log(constantText), [constantText]);
    return (
        <React.Fragment>
            <h1>Callback</h1>
            <div>{dynamicText}</div>
             <div onClick={onClick}>
                {constantText}
            </div>
        </React.Fragment>
       
    )
}

const PlainHandler = ({ constantText, dynamicText }) => {
    const onClick = () => { console.log(constantText) };
    return (
        <React.Fragment>
            <h1>Plain</h1>
            <div>{dynamicText}</div>
             <div onClick={onClick}>
                {constantText}
            </div>
        </React.Fragment>
    );
}

const PlainGroup = (props) => {
    return (
        times(INSTANCE_COUNT, (num) => <PlainHandler key={num} {...props} />)
    )
}

const CallbackGroup = (props) => {
    return (
        times(INSTANCE_COUNT, (num) => <CallbackHandler key={num} {...props} />)
    )
}

const UseCallbackIndirect = () => {
    const [dynamicText, setDynamicText] = useState('Dynamic text #1');
    return (
        <div>
            <button onClick={() => setDynamicText('Dynamic text #2')}>Change text</button>
            <PlainGroup constantText="constantText" dynamicText={dynamicText} />
            <CallbackGroup constantText="constantText" dynamicText={dynamicText} />
        </div>
    );
}

export default UseCallbackIndirect;
