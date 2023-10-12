import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import SetupCard from './setupCard';
import StripeWorkComplete from './StripeWorkComplete';
import Donate from './Donate';
import DonationComplete from './DonationComplete';
import Pay from './Pay';

function App() {
  return (
    <Router>
      <div className="App">      
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path='/' element = {<Home></Home>} >
            </Route>
            <Route path='/create' element = {<Create/>}>
            </Route>
            <Route path='/blogs/:id' element = {<BlogDetails/>}>
            </Route>
            <Route path='/setupCard' element = {<SetupCard/>}>
            </Route>
            <Route path='/Donate' element = {<Donate/>}>
            </Route>
            <Route path='/StripeWorkComplete' element = {<StripeWorkComplete/>}>
            </Route>  
            <Route path='/DonationComplete' element = {<DonationComplete/>}>
            </Route>  
            <Route path='/Pay' element = {<Pay/>}>
            </Route>            
            <Route path='*' element = {<NotFound/>}>
            </Route>            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
