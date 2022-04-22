import { FirstComponent,Header,Footer,Goals,Litepad,Solution,Team,Partners, Particle } from "../components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home(){

    
 
    return(
        <>

            <Particle/>
            <div className="text">
                <Header />
                <FirstComponent />
                <div className='litepad_main_div'>
                    <Litepad />
                    <Solution/>
                    <Goals />
                    <Team />
                    <Partners />
                    <Footer/>
                </div>

            </div>

        </>
    )

}

export default Home