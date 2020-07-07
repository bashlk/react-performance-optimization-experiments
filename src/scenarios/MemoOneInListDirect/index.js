import React, { useState, memo } from 'react';
import { times, map } from 'lodash';

const INSTANCE_COUNT = 100;

const MemoCard = memo(({ id, name, description }) => {
    const onClick = () => { console.log(id) };
    return (
        <React.Fragment>
            <h1>Callback</h1>
            <div>{name}</div>
            <div onClick={onClick}>
                {description}
            </div>
        </React.Fragment>
       
    )
})

const PlainCard = ({ id, name, description }) => {
    const onClick = () => { console.log(id) };
    return (
        <React.Fragment>
            <h1>Plain</h1>
            <div>{name}</div>
            <div onClick={onClick}>
                {description}
            </div>
        </React.Fragment>
    );
}

const PlainGroup = ({ collection }) => {
    return (
        map(collection, (item) => <PlainCard key={item.id} {...item} />)
    )
}

const MemoGroup = ({ collection }) => {
    return (
        map(collection, (item) => <MemoCard key={item.id} {...item} />)
    )
}

const collectionInitial = times(INSTANCE_COUNT, (index) => ({
    id: index,
    name: 'name',
    description: 'description'
}))

const MemoOneInListDirect = () => {
    const [collection, setCollection] = useState(collectionInitial);
    return (
        <div>
            <button onClick={() => {
                const nextCollection = [...collectionInitial];
                nextCollection[INSTANCE_COUNT / 2].description = "Updated description";
                setCollection(nextCollection);
            }}>Change collection</button>
            <PlainGroup collection={collection} />
            <MemoGroup collection={collection} />
        </div>
    );
}

export default MemoOneInListDirect;
