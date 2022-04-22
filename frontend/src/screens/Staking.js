import React, {useState, useEffect} from "react";
import { Container, Row, Col, InputGroup,DropdownButton,Dropdown,FormControl,Form ,Button } from "react-bootstrap";
import ltp from "../assets/images/ltp.png"
import checkpoint from "../assets/images/checkpoint.png";
import confirm from "../assets/images/confirm.png";
import confirmation from "../assets/images/confirmation.png";
import preauth from "../assets/images/pre-auth.png";
import amountstack from "../assets/images/amountstack.png";
import { Link } from "react-router-dom";
import { Particle, Header, Footer } from "../components";
import {busd_addr,factory_addr,litePad_addr,rewardToken_addr,staking_addr,ticketConsumer_addr,
    tokenForSale_addr} from "../contract/addresses"
import Web3Modal from 'web3modal'
// import {} from "../contract/CrowdSale.json"
// import {} from "../contract/Factory.json"
import ZPadAbi  from "../contract/LitePad.json"
// import {} from "../contract/RewardToken.json"
import StakingAbi  from "../contract/Staking.json"
import {ethers} from "ethers"
import { useWeb3React } from "@web3-react/core";
import detectEthereumProvider from '@metamask/detect-provider'
// import {} from "../contract/TicketConsumer.json"


function Staking(){

    const {
        connector,
        library,
        account,
        chainId,
        activate,
        deactivate,
        active,
        errorWeb3Modal
    } = useWeb3React();

    const [isType,setIsType]= useState('stake')
    const [totalzpadToken, setTotalZpadToken] = useState(0)
    const [stakevalue,setStakevalue] = useState(0);
    const [unStakeValue, setUnStakeValue] = useState(0)
    const [staketype,setStaketype] = useState('stake');
    const [totalToken, setTotalToken] = useState()
    const [totalbalance, setTotalBalance] = useState(0)
    const [stakersNo, setStakersNo] = useState(0)
    const [userApy, setUserApy] = useState("105%")
    const [userReward, setUserReward] = useState(0)
    const [userUnstakedValue, setUserUnstakedValue] = useState(0)
    const [authorization, setAuthorization] = useState("")
    const [Confirmation, setConfirmation] = useState("")
    const [confirmed, setConfirmed] = useState("")
    const [ethAddress, setEthAddress] = useState("0")
    const [check, setCheck] = useState(false)
    const [userToken, setUserToken] = useState("0")

    const [bronze, setBronze] = useState(0)
    const [silver, setSilver] = useState(0)
    const [gold, setGold] = useState(0)
    const [tokenError, setTokenError]= useState()
    const [mystate,setMystate] = useState(0);

    const [show1, setShow1] = useState(false)
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [error, setError] = useState()
    const [msgHandling, setMsgHandling] = useState()

    console.log("userReward", userReward)

    const loadProvider = async () => {
        try {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            return provider.getSigner();
          } catch (e) {
            console.log("loadProvider default: ", e);
          }
      };



      const loadTotalStake = async () => {
        try{
            let signer = await loadProvider()
            // console.log("signer", signer)
            let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
            let totalStakedValue = await stakingContract.totalStakedValue()
           
           // let decimalsUnit = await stakingContract._ether();
            let token = await ethers.utils.formatUnits(totalStakedValue.toString(),10)
            setTotalToken(token)
            // console.log(token)
        }catch(e){
            console.log(e)
        }
        }


        const Stake = async () => {
            try{
                setAuthorization("Pre-authorization")
                let signer = await loadProvider()
                let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
                let getBronze = await stakingContract.bronze()
                let ZPadContract = new ethers.Contract(litePad_addr, ZPadAbi, signer)
                let allowanceCheck = await ZPadContract.allowance(account, staking_addr)
                
                let decimalsUnit = await ZPadContract.decimals();
                let _value = await ethers.utils.parseUnits(stakevalue,decimalsUnit)
                // console.log("allowanceCheck", allowanceCheck)
                // console.log("getBronze", getBronze.toString())
                if(allowanceCheck.toString() < getBronze){
                    // console.log("allounceCheck>>", allowanceCheck)
                    setConfirmation("Confirmation")
                    let approve = await ZPadContract.approve(staking_addr, _value)
                    let approveTx = await approve.wait()
                    // console.log("approveTx>", approveTx)
                    if(approveTx && approveTx.blockNumber){
                        setMystate(stakevalue)
                        setMsgHandling("Staking")
                        let stake = await stakingContract.stake(ethers.utils.parseUnits(stakevalue,decimalsUnit))
                        let tx = await stake.wait()
                        // console.log("tx1", tx)
                        totalZpadToken()
                        setConfirmed("Confirmed")
                        // totalBalance()
                        setStakevalue(0)
                        Stakers()
                        loadTotalStake()

                    }
                    else{
                        console.log("error")
                    }
                }else{
                    // console.log("errorr")
                    setConfirmation("Confirmation")
                    setMsgHandling("Staking")
                        let stake = await stakingContract.stake(ethers.utils.parseUnits(stakevalue,decimalsUnit))
                        let tx = await stake.wait()
                        // console.log("tx2", tx)
                        totalZpadToken()
                        setConfirmed("Confirmed")
                        setStakevalue(0)
                        Stakers()
                        loadTotalStake()

                }
                
            }
            catch(e){
                setMsgHandling(e)
                // handleShow()
                handleShow1()
                setError(1)
                console.log("error: ",e)
            }
        }

        const totalZpadToken = async () => {
            try{
              let signer = await loadProvider()
              let ZPadContract = new ethers.Contract(litePad_addr, ZPadAbi, signer)
              let balanceOf = await ZPadContract.balanceOf(account)
              let decimalsUnit = await ZPadContract.decimals();
              let token = await ethers.utils.formatUnits(balanceOf.toString(),decimalsUnit)
              
              setTotalZpadToken(parseInt(token).toString())
              // console.log("balance>>",  token)
            }
            catch(error){
                console.log(error)
            }
             
          }

          const Staking = (event) => {
            Stake()
            event.preventDefault()
        }

        const MaxStake = async () => {
            try{
              let signer = await loadProvider()
              let ZPadContract = new ethers.Contract(litePad_addr, ZPadAbi, signer)
              let balanceOf = await ZPadContract.balanceOf(account)
              let decimalsUnit = await ZPadContract.decimals();
              let token = await ethers.utils.formatUnits(balanceOf.toString(),decimalsUnit)
              


              setStakevalue(parseInt(token).toString())
              // console.log("balance>>",  token)
            }
            catch(error){
                console.log(error)
            }
             
          }

          const userBalance = async () => {
            try{
              let signer = await loadProvider()
              let ZPadContract = new ethers.Contract(litePad_addr, ZPadAbi, signer)
              let balanceOf = await ZPadContract.balanceOf(account)
              let decimalsUnit = await ZPadContract.decimals();
              let token = await ethers.utils.formatUnits(balanceOf.toString(),decimalsUnit)

              setUserToken(parseInt(token).toString())
              // console.log("balance>>",  token)
            }
            catch(error){
                console.log(error)
            }
             
          }

          const unStake = async () => {
            try{
                
                let signer = await loadProvider()
                let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
                let token = await ethers.utils.parseUnits((unStakeValue).toString(),4)
                
                // console.log(token)
                let unStake = await stakingContract.unStake(token)
                // console.log("unStake>>>>>>>>>>", unStake)
                setAuthorization("Unstake")
                let tx = await unStake.wait()
                totalZpadToken()
                setConfirmed("Unstake_Confirmed")
                setUnStakeValue(0)
            }
            catch(e){
                console.log(e)
            }
        }

        const MaxUnStake = async () => {
            try{
                let signer = await loadProvider()
                let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
             //   let ZPadContract = new ethers.Contract(zpad_addr, ZPadAbi, signer)
            //   let decimalsUnit = await ZPadContract.decimals();
            //   console.log("decimalsUnit", decimalsUnit)
                let getUserStakedValue = await stakingContract.getUserStakedValue(account)
                let token = await ethers.utils.formatUnits(getUserStakedValue.toString(),4)
                // console.log("token>>", token)
                setUnStakeValue(parseInt(token).toString())
                // setUnStakeValue(Math.floor(token))

            //     let ZPadContract = new ethers.Contract(zpad_addr, ZPadAbi, signer)
            //   let balanceOf = await ZPadContract.balanceOf(account)
            //   let decimalsUnit = await ZPadContract.decimals();
            //   let token = await ethers.utils.formatUnits(balanceOf.toString(),decimalsUnit)
            }
            catch(e){
                console.log(e)
            }
        }

        const unStaking = (event) => {
            unStake()
            event.preventDefault()
        }

        // This function is used to get unStaked Value

        const getUnstakedValue = async () => {
            try{
                let signer = await loadProvider()
                let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
                let getUserStakedValue = await stakingContract.getUnstakedValue(account)
               // let token = ethers.utils.formatEther(getUserStakedValue.toString())
                let token = await ethers.utils.formatUnits(getUserStakedValue.toString(),16)
                setUserUnstakedValue( parseInt(token).toString())
               
                // console.log(getUserStakedValue.toString())
            }
            catch(e){
                console.log(e)
            }
        }

        const Reward = async () => {
            try{
                let signer = await loadProvider()
                let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
                setAuthorization("Withdraw")
                if(totalbalance == 0){
                    return
                }
                else{
                    let withdrawRewards = await stakingContract.withdrawRewards()
                    await withdrawRewards.wait()
                    setConfirmed("Withdraw_Confirmed")
                // console.log("withdrawRewards", withdrawRewards)
    
                }
                
            }
            catch(e) {
                console.log(e)
            }
        }

        const calcPendingReward = async () => {
            try{
                let signer = await loadProvider()
            let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
            let calcPendingRewards = await stakingContract.calcRewards(account)
            let PendingRewards = await ethers.utils.formatUnits(calcPendingRewards.toString(),4)
            setUserReward(PendingRewards.toString())
            // console.log("userReward", calcPendingRewards.toString())
            }
            catch(e){
                console.log(e)
            }
        } 

        const totalBalance = async () => {
            try{
                // console.log("token>>")
                let signer = await loadProvider()
                let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
                let getUserStakedValue = await stakingContract.getUserStakedValue(account)
               // let token = ethers.utils.formatEther(getUserStakedValue.toString())
                let token = await ethers.utils.formatUnits(getUserStakedValue.toString(),10)
                setTotalBalance(token)
                // console.log("getUserStakedValue", token)
            } 
            catch(e){
                console.log(e)
            }
        }

        const Event = async () => {
            try{
                let signer = await loadProvider()
                let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
                  stakingContract.on("eve_staked", (amount) => {
                    
                    loadTotalStake()
                    totalBalance()
                }
                ) 
                stakingContract.on("eve_Unstaked", (amount) => {
                  
                    loadTotalStake()
                    totalBalance()
                    getUnstakedValue()
                    
                    // console.log("amount>>", amount.toString())
                }
                ) 
            }
            catch(e){
                console.log(e)
            }
        }

        const Stakers = async () => {
            try{
                let signer = await loadProvider()
                let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
                let staker = await stakingContract.noOfStakers()
    
                if(staker <=0 ){
                    setStakersNo("NA")
                }
                else{
    
                    setStakersNo(staker.toString())
                }
                // console.log("getAPY", staker.toString())
            }
            catch(e){
                console.log(e)
            }
        }

        const Tiers = async () => {
            try{
             let signer = await loadProvider()
             let stakingContract = new ethers.Contract(staking_addr, StakingAbi, signer)
             let bronze = await stakingContract.bronze()
             setBronze(Math.floor(ethers.utils.formatEther(bronze.toString())))
            }
            catch(e){
                console.log(e)
            }
         }

         

         useEffect(() => {
            (async () => {
                if (account) {
                    try {
                        // loadTotalStake()
                        // getEther()
                        Event()
                        totalBalance()
                        getUnstakedValue()
                        loadTotalStake()
                        Stakers()
                        Tiers()
                        userBalance()
                        // Stakers()
    
                    } catch (error) {
                        console.log(error)
                    }
                }
            })()
        }, [account]);

        useEffect(() => {
            (async () => {
                if (account) {
                    try {
                        totalZpadToken()
    
                    } catch (error) {
                        console.log(error)
                    }
                }
            })()
        }, [account,totalzpadToken]);

        useEffect(() => {
            (async () => {
                if (account && totalbalance > 0) {
                    try {
                        const interval = setInterval(() => {
                                calcPendingReward();
                                // console.log("hhh")
                              }, 15000);
                              return () => clearInterval(interval);
                        
    
                    } catch (error) {
                        console.log(error)
                    }
                }
            })()
        }, [account, totalbalance]);

        


    return (

        <>
        
        
            <Particle/>

            <div className="text">

            <Header />
            
            <Container>

                    <Row className="align-items-center mb-5">

                        <Col lg={3}>

                       
                            {/* <DropdownButton  title="Staking" className="staking-dropdown">
                                <Dropdown.Item href="/unstaking">Unstaking</Dropdown.Item>
                            </DropdownButton> */}
                           
                            <DropdownButton  title={isType == "stake" ? "Staking":isType == "unstaking" ? "Unstaking" :"Staking"} className="staking-dropdown">
                            {
                            isType == "stake" ? "":
                                <Dropdown.Item href="#" onClick={(e)=>setIsType("stake")}>Staking</Dropdown.Item>
                            }
                            {
                            isType == "unstaking" ? "":
                                <Dropdown.Item href="#" onClick={(e)=>setIsType("unstaking")}>Unstaking</Dropdown.Item>
                            }
                            
                            </DropdownButton>
                       

                        </Col>

                        <Col lg={3}>

                            <div className="ido-box ido-small">

                            <p className="f-bold text-center">Number Of Stakers</p>
                                {stakersNo > 0 ? (
                                <h4 className="soon text-center mt-2">{stakersNo}</h4>
                            ) : (
                                <h4 className="soon text-center mt-2">{("NA")}</h4>
                            )}

                            </div>

                        </Col>

                        <Col lg={3}>
                            
                        <div className="ido-box ido-small">

                            <p className="f-bold text-center">Total litepad Stacked</p>
                            {totalToken > 0 ? (
                                <h4 className="soon text-center mt-2">{Math.floor(totalToken)}</h4>
                            ) : (
                                <h4 className="soon text-center mt-2">{("0")}</h4>
                            )}

                        </div>

                        </Col>

                        <Col lg={3}>
                            
                        <div className="ido-box ido-small">

                            <p className="f-bold text-center">APY</p>
                            <h4 className="soon text-center mt-2">{userApy}</h4>

                        </div>

                        </Col>

                        <Col lg={3}>
                        <button  onClick={async (event) => {
                            const provider = await detectEthereumProvider()
                            provider.sendAsync({
                                method: 'metamask_watchAsset',
                                params: {
                                "type": "ERC20",
                                "options": {
                                    "address": rewardToken_addr,
                                    "symbol": "LPT",
                                    "decimals": 18,
                                },
                                },
                            }, (err, added) => {
                                // console.log('provider returned', err, added)
                                if (err || 'error' in added) {
                            
                                setTokenError("There was a problem adding the token.")
                                return
                                }
                                setTokenError("Token added!")
                            })
                            }}  className="btn-custom primary-btn mt-2">Import Reward
                        </button>

                        </Col>

                    </Row>

                    <Row className="align-items-center">

                        <Col lg={8} sm={12} md={6} className="text-center">
                            <img src={ltp}/>
                        </Col>

                        <Col lg={4} sm={12} md={6}>
                           
                        <div className="ido-box">

                        <div className="staked">
                                <h4>Total Zpad Token</h4>
                                <h2>{totalzpadToken}</h2>
                                {/* {console.log("totalbalance", totalbalance)} */}
                            </div>

                            <div className="staked">
                                <h4>Staked</h4>
                                <h2>{Math.floor(totalbalance)}</h2>
                            </div>

                            <div className="staked">
                                <h4>Unstaked</h4>
                                <h2>{Math.floor(userUnstakedValue)}</h2>
                            </div>

                            <div className="staked">
                                <h4>Reward</h4>
                                <h2>{Math.floor(userReward)}</h2>
                            </div>
                        
                            {isType == "stake"? (
                                <Form className="text-center mt-3">
                                
                                <Form.Group className="mb-3 max-staked" controlId="formBasicCheckbox">
                                <Form.Control type="text" value={stakevalue} placeholder="Stake Amount" onChange={(e)=>setStakevalue(e.target.value)} />
                                <Button onClick={MaxStake} className="">
                                    Max
                                </Button>
                                </Form.Group>
                                <button type="submit" onClick={Staking} className="primary-btn">
                                    Stake
                                </button>
                            </Form>
                            ) : null}

                            {isType == "unstaking" ? (
                                <Form className="text-center mt-3">
                                
                                <Form.Group className="mb-3 max-staked" controlId="formBasicCheckbox">
                                <Form.Control type="text" placeholder="Stake Amount" value={unStakeValue} onChange={(e)=>setUnStakeValue(e.target.value)} />
                                <Button onClick={MaxUnStake} className="">
                                    Max
                                </Button>
                                </Form.Group>
                                <button onClick={unStaking} type="submit" className="primary-btn">
                                    Unstake
                                </button>
                            </Form>
                            ): null}

                            

                        </div>

                        </Col>

                        

                    </Row>
            </Container>
           

        
            

            {/* <Container className="py-5">

            <div className='section-title center'>

                <h5>Stake Your Litepad</h5>
                <h2>Stake</h2>

            </div>

            <div class="roadmap">

                <div class="roadmap-item circle-active">

                    <div class="roadmap-circle">
                        <img src={checkpoint}/>
                    </div>

                    <p>Checkpoint</p>

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
                    <img src={preauth}/>
                    </div>

                    <p>Pre-authorization</p>

                </div>

                <hr class="roadmap-hr"/>

                <div class="roadmap-item">

                    <div class="roadmap-circle">
                    <img src={confirm}/>
                    </div>

                    <p>Confirm</p>

                </div>

                <hr class="roadmap-hr"/>

                    <div class="roadmap-item">

                        <div class="roadmap-circle">
                        <img src={confirmation}/>
                        </div>

                        <p>Confirmation</p>

                    </div>

                

            </div>

    
            <div class="section-title">
                
                <h2>The following conditions must be met before proceeding</h2>

            </div>

            <div className="spacing"></div>

            <div className="ido-box" style={{background: "transparent"}}>

                <div className="d-flex mb-5 flex-xs-wrap">

                    <div className="conditions">

                        <span className="conditions-met">
                            <h4>Connected with MetaMask</h4>
                            <span className="tick-enable"><i class="fa-solid fa-check"></i></span>
                        </span>

                        <p>If not connected, click
                            the "Connect Wallet" 
                            button in the top right
                            corner
                        </p>

                    </div>

                    <div className="conditions">

                         <span className="conditions-met">
                            <h4>Connected with MetaMask</h4>
                            <span className="tick-enable tick-disble"><i class="fa-solid fa-check"></i></span>
                        </span>

                        <p>If not connected, click
                            the "Connect Wallet" 
                            button in the top right
                            corner
                        </p>

                    </div>

                    <div className="conditions">

                         <span className="conditions-met">
                            <h4>Connected with MetaMask</h4>
                            <span className="tick-enable tick-disble"><i class="fa-solid fa-check"></i></span>
                        </span>

                        <p>If not connected, click
                            the "Connect Wallet" 
                            button in the top right
                            corner
                        </p>

                    </div>

                    <div className="conditions">

                         <span className="conditions-met">
                            <h4>Connected with MetaMask</h4>
                            <span className="tick-enable tick-disble"><i class="fa-solid fa-check"></i></span>
                        </span>

                        <p>If not connected, click
                            the "Connect Wallet" 
                            button in the top right
                            corner
                        </p>

                    </div>

                </div>

                <Form>
                    <div class="custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                        <label class="custom-control-label" for="defaultUnchecked">I have read the Terms and Conditions</label>
                    </div>
                </Form>

            </div>

            <div className="text-center my-5">
                <Link to={'/'} className="secondary-btn">Next</Link>
            </div>

            </Container> */}

            <Footer/>
       
            </div>
    

      

        



        </>

    )

}

export default Staking;