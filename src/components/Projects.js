import { Container, Col, Row, Tab } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import ProjectsCard from "./ProjectsCard";
import img1 from '../assets/img/project-img1.png'
import img2 from '../assets/img/project-img2.png'
import img3 from '../assets/img/project-img3.png'
import bgright from '../assets/img/color-sharp2.png'
import TrackVisibility from "react-on-screen";
const Projects = ()=>{
    const projects = [
        {
            title:"Twiosic",
            description: "Music player Layout",
            imgURL:img1
        },
        {
            title:"Twiosic",
            description: "Music player Layout",
            imgURL:img2
        },
        {
            title:"Twiosic",
            description: "Music player Layout",
            imgURL:img3
        },
        {
            title:"Twiosic",
            description: "Music player Layout",
            imgURL:img1
        },
        {
            title:"Twiosic",
            description: "Music player Layout",
            imgURL:img2
        },
        {
            title:"Twiosic",
            description: "Music player Layout",
            imgURL:img3
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInLeft":""}>
                        <h2>
                            Projects
                        </h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home"
                            className="nav-pills mb-5 justify-content-center align-align-items-center "
                            id="pills-tab"
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    New
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    UI
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Youtube
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                    projects.map((project, index)=>{
                                        return(
                                        <ProjectsCard
                                            key={index}
                                            {...project}
                                        />
                                        )
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem ipSum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipSum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={bgright} className="background-image-right" alt="img"/>
        </section>
    )
}

export default Projects