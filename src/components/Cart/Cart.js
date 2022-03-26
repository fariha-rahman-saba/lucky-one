import React, { useState } from 'react';
import './Cart.css'

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const Cart = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal () {
        setIsOpen(true);
    }
    function closeModal () {
        setIsOpen(false);
    }


    const { cart } = props;

    const cartLength = cart.length;

    const luckyNum = Math.floor(Math.random() * cartLength);
    console.log(luckyNum);

    return (
        <div>
            <h2>Selected Cloths</h2>
            {
                cart.map(product => <p>{product.name}</p>)
            }

            <button className='choose-one' onClick={openModal}>CHOOSE 1 FOR ME</button>
            <button className='choose-again'>CHOOSE AGAIN</button>
            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>X</button>
                <div>
                    <h1>Your Lucky Item is: </h1>
                </div>
            </Modal>
        </div>
    );
};

export default Cart;