import './App.css';
import { Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import Hotel from './containers/Hotel';
import HotelDetails from './containers/HotelDetails';
import SignUp from './containers/SignUp';
import Booking from './containers/Booking';
import SignIn from './containers/SignIn';
import NewBooking from './containers/NewBooking';

function App() {
  return (
    <Switch>
      <Route path="/" component={Welcome} exact />
      <Route path="/hotels/:id" component={HotelDetails} />
      <Route path="/hotels" component={Hotel} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/booking" component={Booking} />
      <Route path="/newBooking" component={NewBooking} />

    </Switch>
  );
}

export default App;
