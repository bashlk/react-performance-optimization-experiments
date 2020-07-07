import React, { useState, useCallback } from 'react';
import { times } from 'lodash';

const INSTANCE_COUNT = 100;

const CallbackHandler = ({ text }) => {
    const onClick = useCallback(() => console.log(text), [text]);
    return (
        <div onClick={onClick}>
            Callback - {text}
        </div>
    )
}

const PlainHandler = ({ text }) => {
    const onClick = () => { console.log(text) };
    return (
        <div onClick={onClick}>
            Plain - {text}
        </div>
    );
}

const PlainGroup = ({ text }) => {
    return (
        times(INSTANCE_COUNT, (num) => <PlainHandler key={num} text={text}/>)
    )
}

const CallbackGroup = ({ text }) => {
    return (
        times(INSTANCE_COUNT, (num) => <CallbackHandler key={num} text={text} />)
    )
}

const UseCallbackDirect = () => {
    const [text, setText] = useState('Initial changing text');
    return (
        <div>
            <button onClick={() => setText('Second state')}>Change text</button>
            <PlainGroup text={text} />
            <CallbackGroup text={text} />
        </div>
    );
}

export default UseCallbackDirect;
