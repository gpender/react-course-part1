import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => 
(
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.onPickOk}>
        <h3>Selected Modal</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.onPickOk}>Ok</button>
    </Modal>
);

export default OptionModal;