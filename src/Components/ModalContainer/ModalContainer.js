import React, {useEffect, useRef} from 'react';

const ModalContainer = (props) => {
	const refModal = useRef();
	const onClickHandler = (e) => {
		if (e.target == refModal.current) {
			props.showToggle();
		}
	}
	return (
		<div ref={refModal} className="modal-container" onClick={onClickHandler}>
			<div className="modal-window">
				{props.children}
			</div>
		</div>
	);
};

export default ModalContainer;
