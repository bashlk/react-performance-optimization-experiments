import React, { useState, memo } from 'react';
import { times } from 'lodash';

const INSTANCE_COUNT = 100;

const PlainComponent = ({ text, onClick }) => {
    return (
        <React.Fragment>
            <h1>Title</h1>
            <div>{text}</div>
             <div onClick={onClick}>
                Click
            </div>
        </React.Fragment>
       
    )
}

const MemoComponent = memo(PlainComponent);

const PlainGroup = (props) => {
    return (
        times(INSTANCE_COUNT, (num) => <PlainComponent key={num} {...props} />)
    )
}

const MemoGroup = (props) => {
    return (
        times(INSTANCE_COUNT, (num) => <MemoComponent key={num} {...props} />)
    )
}

const onClick = () => console.log('clicked');
const MemoDirect = () => {
    const [text, setText] = useState('Initial text');
    return (
        <div className="App">
            <button onClick={() => setText('Updated text')}>Update</button>
            <PlainGroup text={text} onClick={onClick} />
            <MemoGroup text={text} onClick={onClick} />
        </div>
    );
}

export default MemoDirect;
