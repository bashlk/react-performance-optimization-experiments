import React, { useState, useMemo } from 'react';
import { times } from 'lodash';

const INSTANCE_COUNT = 100;

const PlainComponent = ({ text, color, onClick }) => {
    return (
        <React.Fragment>
            <h1 style={{ color }}>Title</h1>
            <div>{text}</div>
             <div onClick={onClick}>
                Click
            </div>
        </React.Fragment>
    )
}

const UseMemoComponent = ({ text, color, onClick }) => {
    const headingStyle = useMemo(() => ({ color }), [color])
    return (
        <React.Fragment>
            <h1 style={headingStyle}>Title</h1>
            <div>{text}</div>
             <div onClick={onClick}>
                Click
            </div>
        </React.Fragment>
    )
}

const PlainGroup = (props) => {
    return (
        times(INSTANCE_COUNT, (num) => <PlainComponent key={num} {...props} />)
    )
}

const UseMemoGroup = (props) => {
    return (
        times(INSTANCE_COUNT, (num) => <UseMemoComponent key={num} {...props} />)
    )
}

const onClick = () => console.log('clicked');
const UseMemoDirect = () => {
    const [color, setColor] = useState('black');
    const [text, setText] = useState('Initial text');
    return (
        <div className="App">
            <button onClick={() => setColor('red')}>Set color</button>
            <button onClick={() => setText('Updated text')}>Set text</button>
            <PlainGroup text={text} onClick={onClick} color={color} />
            <UseMemoGroup text={text} onClick={onClick} color={color} />
        </div>
    );
}

export default UseMemoDirect;
