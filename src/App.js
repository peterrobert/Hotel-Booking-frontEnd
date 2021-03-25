import './App.css';
import Welcome from './components/Welcome';
import Hotel from './containers/Hotel';
import {Route, Switch } from 'react-router-dom';
import HotelDetails from './containers/HotelDetails';
import SignUp from './containers/SignUp';


function App() {
  return (
      <Switch>
       <Route path='/' component={Welcome}   exact/>
       <Route path="/hotels/:id" component={HotelDetails} />
       <Route path='/hotels' component={Hotel}  />
       <Route path='/signUp' component={SignUp}  />
       
      </Switch>
  );
}

export default App;
