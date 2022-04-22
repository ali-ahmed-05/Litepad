import {React, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CoinGecko from "../assets/images/CoinGecko.png"
import CoinMarketCap from "../assets/images/CoinMarketCap.png"
import gateio from "../assets/images/gate-io.png"
import Hotbitfrom from "../assets/images/HotBit.png"
import pancakeswap from "../assets/images/pancakeswap.png"


function Partners(){

    const [copied, setCopied] = useState(false)
    const onCopy = () => {
        setCopied(true)
      };
  
  return (
    <section className=''>
       

       
        
        <Container>

                    
       
            <h2 className='title-partner'>Partners</h2>

            
            <ul className='partner-logo'>
                <li>
                    <a href='#'>
                        <img src={CoinGecko}/>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <img src={CoinMarketCap}/>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <img src={gateio}/>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <img src={Hotbitfrom}/>
                    </a>
                </li>

                <li>
                    <a href='#'>
                        <img src={pancakeswap}/>
                    </a>
                </li>

            </ul>

            <Row className='pt-5'>
                <Col lg={6}>

                <table className='partner-table'>
                    <tbody>
                        <tr>
                            <td><strong>Start: ICO:</strong></td>
                            <td>March 28, 2022, Monday, 8:00 UTC (UTC)</td>
                        </tr>
                        <tr>
                            <td><strong>Total Supply:</strong></td>
                            <td>500M</td>
                        </tr>
                        <tr>
                            <td><strong>ICO:</strong></td>
                            <td>100M</td>
                        </tr>
                        <tr>
                            <td><strong>IDO:</strong></td>
                            <td>50M</td>
                        </tr>
                        <tr>
                            <td><strong>Exchange rate:</strong></td>
                            <td>1 BUSD = 10 LitePad</td>
                        </tr>
                        <tr>
                            <td><strong>Project protocol:</strong></td>
                            <td>BEP20</td>
                        </tr>
                    </tbody>
                </table>

                </Col>

                <Col lg={6}>
                    
                    <div className='payment-method'>
                        <h4>Payment Methods</h4>
                        <h4>litepad Token Contract Address</h4>
                    </div>

                    <p className='clickcopy'>
                        <span>
                        <CopyToClipboard
                        onCopy={onCopy}
                        text="0x3b9bA781797b57872687Ce5d5219A1A4Bc0e85ea">
                            <code>0x0CFc9D2c958e9a2616CB9f2015eb4883b9ECC4E8</code>
                        </CopyToClipboard>
                        {copied ? <span className='copied'>Copied.</span> : <span className='copied'>Click to Copy.</span>}

        
                        </span>
                    </p>

                    <p class="grey-text text-start">
                        The following address is for the litepad token contract. It is NOT a deposit address. Do NOT send tokens to it. To deposit, use the Deposit form 
                    </p>


                </Col>
            </Row>

            <button className='secondary-btn'>Buy litepad token</button>

            <div className='my-5'>
            
                <div class="section-title center">
                    <h2>LitePad Token</h2>
                </div>

                <h5 className='blue-text'>Our clients – both corporate and private ones – will access all the services they need from a single platform. Blockchain technology gives us the chance to make your finances grow faster and give better returns.</h5>

                <h5 className='email'>Email: <a href='mailto:support@litepad.cc'>support@litepad.cc</a></h5>

            </div>


          
        </Container>

    </section>
  )
}

export default Partners