import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ltp from "../assets/images/ltp.png"

const Solution = () => {
  return (
    <section className='py-5 my-5'>
       
        
        <Container>
            <Row>

                

                <Col lg={6}>

                    <img src={ltp}/>

                  
                </Col>

                <Col lg={6}>
                    
                    <div className='section-title'>

                        <h5>Solutions</h5>
                        <h2>Protecting Investors' Interests</h2>

                    </div>

                    <div class="spacing"></div>

                    <div>

                        <p className='normal-p'>
                            While we are helping start-ups to raise the funds, we care about investors whose investments’ protection we wish to guarantee to the maximum extent.
                        </p>

                        <p className='second-head'>Risk Statement</p>

                        <p className='normal-p'>
                        The legal regulatory Market and operational risks are set up in the Terms and Conditions of the Litepad Token Sale, You are advised to read and review this risks before contributing to Litepad in any way.
                        </p>

                    </div>
                </Col>

            </Row>
          
            

            
        </Container>
    </section>
  )
}

export default Solution