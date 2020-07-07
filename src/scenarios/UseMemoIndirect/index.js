import React, { useState, useMemo } from 'react';
import { times } from 'lodash';

const INSTANCE_COUNT = 100;

const PlainComponent = ({ text, onClick }) => {
    return (
        <React.Fragment>
            <h1 style={{ color: 'red' }}>Title</h1>
            <div>{text}</div>
             <div onClick={onClick}>
                Click
            </div>
        </React.Fragment>
    )
}

const headingStyle = { color: 'red' };
const OuterComponent = ({ text, onClick }) => {
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

const UseMemoComponent = ({ text, onClick }) => {
    const headingStyle = useMemo(() => ({ color: 'red' }), [])
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

const OuterGroup = (props) => {
    return (
        times(INSTANCE_COUNT, (num) => <OuterComponent key={num} {...props} />)
    )
}

const UseMemoGroup = (props) => {
    return (
        times(INSTANCE_COUNT, (num) => <UseMemoComponent key={num} {...props} />)
    )
}

const onClick = () => console.log('clicked');
const UseMemoIndirect = () => {
    const [siblingState, setSiblingState] = useState('Sibling - Initial');
    return (
        <div className="App">
            <div onClick={() => setSiblingState('Sibling - Clicked')}>{siblingState}</div>
            <PlainGroup text="Initial text" onClick={onClick} />
            <UseMemoGroup text="Initial text" onClick={onClick} />
            <OuterGroup text="Initial text" onClick={onClick} />
        </div>
    );
}

export default UseMemoIndirect;
