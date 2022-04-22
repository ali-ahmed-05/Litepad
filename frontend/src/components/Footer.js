import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'



const Footer = () => {
  return (
    <footer className=''>
       
        
        <Container>
            
            <Row>
                <Col lg={6}>
                <p className='copyright'>Litepad Token © {new Date().getFullYear()}</p>
                </Col>

                <Col lg={6}>

                    <ul className='social'>
                        <li>
                            <a href='#'><i class="fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href='#'><i class="fa-brands fa-telegram"></i></a>
                        </li>
                    </ul>

                </Col>
            </Row>

        </Container>

    </footer>
  )
}

export default Footer