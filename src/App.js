import './App.css';
import Welcome from './components/Welcome';
import Hotel from './containers/Hotel';
import {Route, Switch } from 'react-router-dom';
import HotelDetails from './containers/HotelDetails';


function App() {
  return (
      <Switch>
       <Route path='/' component={Welcome}   exact/>
       <Route path="/hotels/:id" component={HotelDetails} />
       <Route path='/hotels' component={Hotel}  />
      </Switch>
  );
}

export default App;
