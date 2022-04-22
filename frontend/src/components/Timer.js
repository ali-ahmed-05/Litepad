import{ Component } from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

class Completed extends Component {
    render() {
      return <span>The countdown is complete</span>
    }
  }

function Timer(){

    return (

        <>
        
        <FlipClockCountdown className='flip-timer' to={new Date().getTime() + 72 * 3600 * 1000 + 5000}>
        <Completed />
        </FlipClockCountdown>

        </>

    )

}

export default Timer