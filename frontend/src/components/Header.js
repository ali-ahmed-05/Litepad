import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import { injectedConnector } from "../utils/connectors"
import { connectWallet } from "../utils/connectWallet";
import { useWeb3React } from "@web3-react/core";


const Header = () => {

  const [loaded, setLoaded] = useState(false)

  const {
    connector,
    library,
    account,
    chainId,
    activate,
    deactivate,
    active,
    errorWeb3Modal,
    active: networkActive, error: networkError, activate: activateNetwork
  } = useWeb3React();

  useEffect(() => {
    injectedConnector
      .isAuthorized()
      .then((isAuthorized) => {
        setLoaded(true)
        if (isAuthorized && !networkActive && !networkError) {
          activateNetwork(injectedConnector)
        }
      })
      .catch(() => {
        setLoaded(true)
      })
  }, [activateNetwork, networkActive, networkError])

  return (
    <Container>
      <nav class="navbar">
        <div class="container-fluid">
          {/* <a class="navbar-brand">Navbar</a> */}
          <div className='logo_div'>
            <Link to={"/"}> <img src={logo} /> </Link>
          </div>
          <ul class="d-flex" className='nav_bar'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/staking"}>Staking</Link></li>
            <li><Link to={"#"}>NFTs</Link></li>
            {active
              ? (
                <li><Link to="" className='secondary-btn' >Connected</Link></li>
              ) : <li><Link to="" className='secondary-btn' onClick={(e) => {
                connectWallet(activate, "Error");
                e.preventDefault()
                
              }} >Connect Wallet</Link></li>
            }
            

            {/* <button onClick={(e) => {
                connectWallet(activate, "Error");
                e.preventDefault()
                
              }} className="btn btn-primary btn-wallet">CONNECT YOUR WALLET</button> */}


          </ul>
        </div>
      </nav>
    </Container>
  )
}

export default Header