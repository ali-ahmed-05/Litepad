import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ltp from "../assets/images/ltp.png"

const Goals = () => {
  return (
    <section className='pt-5 mt-5'>
       
        
        <Container>

                    
                    <div className='section-title center'>

                        <h5>Our Goal</h5>
                        <h2>We Bring Together Marketplaces & Finance</h2>

                    </div>

                    <p className='normal-p text-center'>The ultimate goal of litepad is to be the all-in-one solution and offer a wide array of services from market to finance.</p>

                    <div class="spacing"></div>

                    <p className='grey-text text-center'>
                    Our clients – both corporate and private ones – will access all the services they need from a single platform. Blockchain technology gives us the chance to make your finances grow faster and give better returns.
                    </p>
                    
                    <div className='py-5 my-5'>

                        <div className='section-title center'>

                            <h5>LITEPAD</h5>
                            <h2>What Is ICO</h2>

                        </div>

                    <div class="spacing"></div>

                        <Row className='justify-content-center'>
                            <Col lg={8}>
                                <p className='normal-p'>An initial coin offering (ICO) is the cryptocurrency industry’s equivalent to an initial public offering (IPO). A company seeking to raise money to create a new coin, app, or service can launch an ICO as a way to raise funds.</p>
                                <p className='normal-p'>
                                Interested investors can buy into an initial coin offering to receive a new cryptocurrency token issued by the company. This token may have some utility related to the product or service that the company is offering, or it may just represent a stake in the company or project.                                    
                                </p>
                            </Col>

                        </Row>

                        <div class="spacing"></div>

                        <Row className='justify-content-center'>

                            <Col lg={5}>

                                <div className='big-numbers'>
                                    <h2>100M</h2>
                                    <p> $1 BUSD = 100 LITEPAD ON PRESALE </p>
                                </div>

                            </Col>

                            <Col lg={5}>

                                <div className='big-numbers'>
                                    <h2>50M</h2>
                                    <p> 1 BUSD = 50 LITEPAD ON IDO </p>
                                </div>

                            </Col>



                            <Col lg={5}>

                            <div class="spacing"></div>
                            <div class="spacing"></div>


                                <div className='big-numbers'>
                                    <h2>5%</h2>
                                    <p> 5% Team & Advisors(1 years linear release) </p>
                                </div>

                            </Col>

                        </Row>

                        <div class="spacing"></div>


                        <Row className='g-0'>

                            <Col lg={6}>

                                <div className='supply'>

                                    <h5>LitePad Total Supply</h5>
                                    <h3>500M</h3>

                                </div>

                            </Col>

                            <Col lg={6}>

                            <div className='supply'>

                                <h5>LitePad Total Supply</h5>
                                <h3>500M</h3>

                            </div>

                            </Col>

                        </Row>

                    </div>
            
          
        </Container>

    </section>
  )
}

export default Goals