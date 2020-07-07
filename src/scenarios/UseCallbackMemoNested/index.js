import React, { useState, useCallback, memo } from 'react';
import { times } from 'lodash';

const INSTANCE_COUNT = 100;

const ChildLevel4 = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            Click
        </div>
    )
}

const ChildLevel3 = ({ onClick }) => (
    <ChildLevel4 onClick={onClick} />
)

const ChildLevel2 = ({ onClick }) => (
    <ChildLevel3 onClick={onClick} />
)

const ChildLevel1 = ({ onClick }) => (
    <ChildLevel2 onClick={onClick} />
)

const ChildRoot = memo(({ text, onClick }) => (
    <React.Fragment>
        <span>{text}</span>
        <ChildLevel1 onClick={onClick} />
    </React.Fragment>
))

const onClick = () => console.log('clicked');
const OuterRoot = ({ text }) => {
    return (
        times(INSTANCE_COUNT, (num) => <ChildRoot key={num} text={text} onClick={onClick} />)
    )
}

const CallbackRoot = ({ text }) => {
    const onClick = useCallback(() => console.log('clicked'), []);
    return (
        times(INSTANCE_COUNT, (num) => <ChildRoot key={num} text={text} onClick={onClick} />)
    )
}

const PlainRoot = ({ text }) => {
    const onClick = () => console.log('clicked');
    return (
        times(INSTANCE_COUNT, (num) => <ChildRoot key={num} text={text} onClick={onClick} />)
    )
}

const UseCallbackMemoNested = () => {
    const [siblingState, setSiblingState] = useState('Sibling - Initial');
    return (
        <div className="App">
            <div onClick={() => setSiblingState('Sibling - Clicked')}>{siblingState}</div>
            <PlainRoot text="Initial text" />
            <CallbackRoot text="Initial text" />
            <OuterRoot text="Initial text" />
        </div>
    );
}

export default UseCallbackMemoNested;
