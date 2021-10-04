import React, {useEffect, useState} from 'react';
import MultiFilterItem from "./MultiFilterItem/MultiFilterItem";

const MultiFilter = (props) => {
    const [activeFilters, setActiveFilters] = useState([]);
    const [filters, setFilters] = useState(props.filters);

    const onChangeHandler = (e) => {
        let items = filters;
        let activeItems = [...activeFilters];
        items.forEach(item => {
            if (item.id == e.target.value)
                if (e.target.checked) {
                    item.isActive = true;
                    activeItems.push(item.id);
                } else {
                    item.isActive = true;
                    activeItems.splice(items.indexOf(item.id),1)
                }
        })
        setFilters(items);
        setActiveFilters(activeItems);
    }

    const clearHandler = () => {
        let items = filters;
        let activeItems = [...activeFilters];
        items.forEach(item => {
            if (item.isActive == true) {
                item.isActive = false;
                activeItems.splice(items.indexOf(item.id), 1);
            }
        })
        setFilters(items);
        setActiveFilters(activeItems);
    }

    useEffect(()=> {
        props.setState(activeFilters);
        console.log(activeFilters);
    },[activeFilters])

    return (
        <div className="multifilter">
            <h5>{props.title}</h5>
            <div className="multifilters-checkbox-container scroll-small">
                    {filters.map((item)=>{
                        return (
                            <MultiFilterItem key={item.id} id={item.id} checked={item.isActive} onChange={onChangeHandler} title={item.title}/>
                        )
                    })}
            </div>
            <div onClick={clearHandler}>
                <h5>Clear all</h5>
            </div>

        </div>
    );
};

export default MultiFilter;
