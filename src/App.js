
import './App.css';
import Homescreen from './components/screens/Homescreen';
import Searchscreen from './components/screens/Searchscreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import Errorscreen from './components/screens/Errorscreen';
import {  BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
          <Route path='/' exact>
             
                <Homescreen />
             
          </Route>
        
 
          <Route path='/search' exact>
            
                <Searchscreen/>

          </Route>
          {/* //<Route path='/*'>
            
            <Errorscreen/>

      </Route> */}


          
       </Router>
  );
}

export default App;
