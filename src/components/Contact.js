import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';
import TrackVisibility from "react-on-screen";

const Contact = () => {
    const formInitDetails = {
        firtname: '',
        lastname: '',
        phone: '',
        email:'',
        message:'',
    }

    const [formDetails, setFormDetails] = useState(formInitDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});
    
    const onFormUpdate =(category, value)=>{
        setFormDetails({
            ...formDetails,
            [category]: value,
        })
    }

    const handleSubmit = ()=>{

    }
    
    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                

                    <Col md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                        <img src={contactImg} alt="Contact us"/>
                        </div>}
                        </TrackVisibility>
                    </Col>


                    <Col md={6} className="px-1">
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col className="px-1" sm={6}>
                                    <input type="text" value={formDetails.firtname} placeholder="First Name" onChange={(e)=>onFormUpdate("firstname", e.target.value)}/>
                                </Col>
                                <Col className="px-1" sm={6}>
                                    <input type="text" value={formDetails.lastname} placeholder="Last Name" onChange={(e)=>onFormUpdate("lastname", e.target.value)}/>
                                </Col>
                                <Col className="px-1" sm={6}>
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=>onFormUpdate("email", e.target.value)}/>
                                </Col>
                                <Col className="px-1" sm={6}>
                                    <input type="tel" value={formDetails.phone} placeholder="Phone no." onChange={(e)=>onFormUpdate("phone", e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate("message", e.target.value)}></textarea>
                                    <button type="submit" ><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success" }>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>
    )

}

export default Contact;