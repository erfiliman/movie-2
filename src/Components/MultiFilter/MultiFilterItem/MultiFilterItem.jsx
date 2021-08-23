import React, {useEffect} from 'react';

const MultiFilterItem = (props) => {
    return (
        <div className="multifilters-item">
            <label>
                <input type="checkbox" value={props.id} checked={props.isActive} onChange={props.onChange}/>
                <span className="checkmark"></span>
                <span className="checktitle">{props.title}</span>
            </label>
        </div>
    );
};

export default MultiFilterItem;
