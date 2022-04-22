import {useState, React} from 'react'
import { Container, Row, Col,ProgressBar } from 'react-bootstrap'
import Timer from './Timer';



const FirstComponent = () => {
    const [count, setCount] = useState(0);
    return (

        <section className='main'>
        <Container className='h-100'>
            <Row className='h-100 align-items-center justify-content-between'>

                <Col lg={6}>
                   
                    <h1 className='main-title'>LITEPAD TOKEN</h1>
                    <div class="spacing"></div>
                    <p className='normal-p text-center'>litepad token is a platform for the future of funding that is built on top of the BNB Smart Chain</p>

                 
                    <h2 className='main-bold'>BITCOIN </h2>
                    
                    <p className='normal-p'>
                    The original cryptocurrency, Bitcoin was designed to be peer-to-peer digital cash for transaction purposes, Bitcoin’s original purpose is to ease usability drawbacks characterized by fiat currencies and centralized systems.
                    </p>


                </Col>

                <Col lg={4}>

                <div className='preSale-box'>
                   
                    <p>Presale Ends In</p>

                    <Timer/>
                   
                    <div className='btn-grp'>

                        <button className='primary-btn'>BUY LITEBAD TOKENS</button>
                        <button className='primary-btn'>WHITEPAPER</button>


                    </div>

                    <div className="presale_dollar_div">
                        
                        <div className='text-start'>
                            <h4>$0.01</h4>
                            <p>Worth of litepad tokens</p>
                        </div>

                        <div className='text-end'>
                            <h4>$500k</h4>
                            <p>Busd To Raise</p>
                        </div>
                        
                    </div>

                    <div className="sale-progress">


                    <div className="sale-value">
                        <p>$40k</p>
                        <p>$ 500k</p>
                    </div>


                    <ProgressBar now={0} />

                    <div className="soft-cap">
                        <p>IMC $40K</p>
                        <p>Hardcap</p>
                    </div>

                    </div>
                   
                </div>
                </Col>

            </Row>
        </Container>
        </section>
    )
}

export default FirstComponent