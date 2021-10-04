import React, {useRef, useState} from 'react';

const DropDownMenu = (props) => {
    const refCurrent = useRef();
    const refChoose = useRef();

    const [menuChoosen, setMenuChoosen] = useState(props.data.map((item)=>{if (item.data==props.state) return item.label}));


    const chooseHandler = (e) => {
        refCurrent.current.innerHTML = e.target.innerHTML;
        props.setState(e.target.getAttribute('data-value'));
        refChoose.current.classList.toggle('showed');
    }

    const showChooseHandler = (e) => {
        refChoose.current.classList.toggle('showed');
    }

    return (
        <div className="dropdown-menu-container">
            <div className="dropdown-menu" ref={refChoose}>
                <div ref={refCurrent} onClick={showChooseHandler} className="dropdown-menu-current">{menuChoosen}</div>
                <ul className="list-choose" >
                {props.data.map((item, index)=> <li key={"dropdown"+index} data-value={`${item.data}`} onClick={chooseHandler}>{item.label}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default DropDownMenu;
