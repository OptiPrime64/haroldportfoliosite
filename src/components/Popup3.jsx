import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import awktea from "../assets/awkwardtea.jpg";


export default function Popup3() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
        </Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>

                    <img style={{ width: "100%" }} src={awktea} />

                </Modal.Body>

            </Modal>
        </>
    );

}

