import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";

function CroppedImage(fromPort) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <div class="container col-sm-6 col-md-4 col-lg-3">

            <div class="thumb">
                <div class="crop">
                    <img onClick={handleShow} src={fromPort.img} alt={fromPort.name} />
                </div>
                <h6>{fromPort.name}</h6>
            </div>

            <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>

                <img style={{ width: "100%" }} src={fromPort.img} />

            </Modal.Body>

        </Modal>
        </div>
        

    );
}

export default CroppedImage;

