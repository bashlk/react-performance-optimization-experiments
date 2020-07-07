import React, { useState, memo } from 'react';
import { times } from 'lodash';

const INSTANCE_COUNT = 100;

const PlainComponent = ({
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    onClick
}) => {
    return (
        <React.Fragment>
            <h1>Title</h1>
            <div>{text1}</div>
            <div>{text2}</div>
            <div>{text3}</div>
            <div>{text4}</div>
            <div>{text5}</div>
            <div>{text6}</div>
            <div>{text7}</div>
            <div>{text8}</div>
            <div>{text9}</div>
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
const props = {
    text1: 'Text1',
    text2: 'Text2',
    text3: 'Text3',
    text4: 'Text4',
    text5: 'Text5',
    text6: 'Text6',
    text7: 'Text7',
    text8: 'Text8',
    text9: 'Text9',
    onClick
}
const MemoLargeIndirect = () => {
    const [siblingState, setSiblingState] = useState('Sibling - Initial');
    return (
        <div className="App">
            <div onClick={() => setSiblingState('Sibling - Clicked')}>{siblingState}</div>
            <PlainGroup {...props} />
            <MemoGroup {...props} />
        </div>
    );
}

export default MemoLargeIndirect;
