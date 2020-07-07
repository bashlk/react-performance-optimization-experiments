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
const MemoIndirect = () => {
    const [siblingState, setSiblingState] = useState('Sibling - Initial');
    return (
        <div className="App">
            <div onClick={() => setSiblingState('Sibling - Clicked')}>{siblingState}</div>
            <PlainGroup text="Initial text" onClick={onClick} />
            <MemoGroup text="Initial text" onClick={onClick} />
        </div>
    );
}

export default MemoIndirect;
