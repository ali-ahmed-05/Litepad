import logo from './logo.svg';
import './assets/css/style.css';
import './assets/fontawesome/css/all.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './screens/Home';
import Staking from './screens/Staking';
import Unstaking from './screens/Unstaking';


function App() {


  return (
    <div className="App">
    
<Router>


  <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/staking" element={<Staking/>} />
    {/* <Route path="/unstaking" element={<Unstaking/>} /> */}

  </Routes>

</Router>
  
    </div>
  );
}

export default App;
