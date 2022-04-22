import { Container, Row, Col, InputGroup,DropdownButton,Dropdown,FormControl,Form ,Button } from "react-bootstrap";
import ltp from "../assets/images/ltp.png"
import checkpoint from "../assets/images/checkpoint.png";
import confirm from "../assets/images/confirm.png";
import confirmation from "../assets/images/confirmation.png";
import warningyellow from "../assets/images/warning-yellow.png"
import warning from "../assets/images/warning.png";
import amountstack from "../assets/images/amountstack.png";
import { Link } from "react-router-dom";
import { Particle, Header, Footer } from "../components";

function Unstaking(){


    return (

        <>
        
        
            <Particle/>

            <div className="text">

            <Header />
            
            <Container>

                    <Row className="align-items-center mb-5">

                        <Col lg={3}>

                       
                            <DropdownButton  title="Unstaking" className="staking-dropdown">
                                <Dropdown.Item href="/staking">Staking</Dropdown.Item>
                            </DropdownButton>
                           
                       

                        </Col>

                        <Col lg={3}>

                            <div className="ido-box ido-small">

                                <p className="f-bold text-center">Number Of Stackers</p>
                                <h4 className="soon text-center mt-2">123456</h4>

                            </div>

                        </Col>

                        <Col lg={3}>
                            
                        <div className="ido-box ido-small">

                            <p className="f-bold text-center">Total Zpad Stacked</p>
                            <h4 className="soon text-center mt-2">ss</h4>

                        </div>

                        </Col>

                        <Col lg={3}>
                            
                        <div className="ido-box ido-small">

                            <p className="f-bold text-center">APY</p>
                            <h4 className="soon text-center mt-2">123456</h4>

                        </div>

                        </Col>

                    </Row>

                    <Row className="align-items-center">

                        <Col lg={8} sm={12} md={6} className="text-center">
                            <img src={ltp}/>
                        </Col>

                        <Col lg={4} sm={12} md={6}>
                           
                        <div className="ido-box">

                            <div className="staked">
                                <h4>Staked</h4>
                                <h2>0.0000</h2>
                            </div>

                            <div className="staked">
                                <h4>Unstaked</h4>
                                <h2>0.0000</h2>
                            </div>

                            <div className="staked">
                                <h4>Reward</h4>
                                <h2>0.0000</h2>
                            </div>
                        
                            

                            <Form className="text-center mt-3">
                                
                                <Form.Group className="mb-3 max-staked" controlId="formBasicCheckbox">
                                <Form.Control type="text" placeholder="Stake Amount" />
                                <Button className="">
                                    Max
                                </Button>
                                </Form.Group>
                                <button type="submit" className="primary-btn">
                                    Unstake
                                </button>
                            </Form>

                        </div>

                        </Col>

                        

                    </Row>
            </Container>
           

        
            

            <Container className="py-5">

            <div className='section-title center'>

                <h5>Unstake Your Litepad</h5>
                <h2>Stake</h2>

            </div>

            <div class="roadmap">

                <div class="roadmap-item circle-active">

                    <div class="roadmap-circle">
                        <img src={warning}/>
                    </div>

                    <p>Warning</p>

                </div>

                <hr class="roadmap-hr"/>

                <div class="roadmap-item">

                    <div class="roadmap-circle">
                    <img src={checkpoint}/>
                    </div>

                    <p>Checklist</p>

                </div>

                <hr class="roadmap-hr"/>

                <div class="roadmap-item">

                    <div class="roadmap-circle">
                    <img src={amountstack}/>
                    </div>

                    <p>Amount to Stake</p>

                </div>

                <hr class="roadmap-hr"/>

                <div class="roadmap-item">

                    <div class="roadmap-circle">
                    <img src={confirm}/>
                    </div>

                    <p>Initialize Unstake</p>

                </div>

                <hr class="roadmap-hr"/>

                    <div class="roadmap-item">

                        <div class="roadmap-circle">
                        <img src={confirmation}/>
                        </div>

                        <p>Confirmation</p>

                    </div>

                

            </div>

    

            <div className="ido-box" style={{background: "transparent"}}>

                <div className="unstaking-warn">

                <img src={warningyellow}/>
                <p>After Unstaking, you must wait 7 days before you can withdraw your BSCPAD and rewards.

                The amount of tokens you Unstake will not count towards your tier level for upcoming Projects.</p>

                </div>

            </div>

            <div className="text-center my-5">
                <Link to={'/'} className="secondary-btn">Next</Link>
            </div>

            </Container>

            <Footer/>
       
            </div>
    

      

        



        </>

    )

}

export default Unstaking;