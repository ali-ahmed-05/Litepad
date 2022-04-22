import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Litepad = () => {
  return (
   
    
    <section>
        <div className='litepad_heading'>
            <h4>LItePad</h4>
        </div>
        <div className='litepad_token'>
            <h3>What is litepad Token</h3>
        </div>
        <div style={{width:"70px", height:"3px", margin:"2rem auto", backgroundColor:"yellow"}}></div>
        
        <Container>
            <Row>

                <Col lg={6}>
                    
                    <div className='about-litpad'>
                    
                    <h4>
                    LitePad is a decentralized multi-chain fundraising platform enabling projects to raise capital and promise safety to early stage investors. Stake LitePad tokens to get priority-access to promising projects.
                    </h4>
                    <p className='normal-p'>
                        NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs can represent real-world items like artwork and real estate. “Tokenizing” these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud
                    </p>

                    <ul className='about-ul'>
                        <li><i class="fa-solid fa-right-long"></i> Blockchain Strategy</li>
                        <li><i class="fa-solid fa-right-long"></i> ICO Marketing</li>
                        <li><i class="fa-solid fa-right-long"></i> Financial Services</li>
                        <li><i class="fa-solid fa-right-long"></i> Blockchain Strategy</li>
                        <li><i class="fa-solid fa-right-long"></i> ICO Marketing</li>
                        <li><i class="fa-solid fa-right-long"></i> Financial Services</li>
                    </ul>

                    </div>

                </Col>

                <Col lg={6}>

                    <div className='watch-video'>

                        <div className='watch-video-icon'>

                            <a href='#'>
                                <div className='play-animate'>
                                <i class="fa-solid fa-play"></i>
                                </div>
                                <span>
                                <h4>Watch Video</h4>
                                <span>About LitePad</span>
                                </span>
                            </a>

                        </div>

                    </div>

                </Col>

            </Row>
          
            

            
        </Container>
    </section>
  )
}

export default Litepad