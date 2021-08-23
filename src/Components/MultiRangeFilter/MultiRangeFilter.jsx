import React, {useEffect, useState} from 'react';

const MultiRangeFilter = (props) => {
    const [currentLeft, setCurrentLeft] = useState(props.start);
    const [currentRight, setCurrentRight] = useState(props.end);

    useEffect(()=>{
        let timeoutChange = setTimeout(()=>{
            props.setState({from: currentLeft, to: currentRight});
        }, 500)

        return () => {
            clearTimeout(timeoutChange);
        }
    }, [currentRight, currentLeft])



    return (
        <div>
            <div className="multi-range-input-container">
                <h5>{props.title}</h5>
                <div>
                    <label>От</label>
                    <input type="range" min={props.start} max={props.end} step={props.step} onChange={e => setCurrentLeft(e.target.value)} value={currentLeft}/>
                    <span>{currentLeft}</span>
                </div>
                <div>
                    <label>До</label>
                    <input type="range" min={props.start} max={props.end} step={props.step} onChange={e => setCurrentRight(e.target.value)} value={currentRight}/>
                    <span>{currentRight}</span>
                </div>
            </div>
            {/*<div className="multi-range-track-container">*/}
            {/*    <div className="multi-range-track">*/}

            {/*        <div className="multi-range-controller multi-range-controller_left">*/}
            {/*            <div className="multi-range-track-bg">*/}
            {/*                <div></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="multi-range-controller multi-range-controller_right"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default MultiRangeFilter;
