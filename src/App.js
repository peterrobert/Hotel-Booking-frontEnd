import './App.css';
import Welcome from './components/Welcome';
import Hotel from './containers/Hotel';
import {Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Switch>
       <Route path='/' component={Welcome}   exact/>
       <Route path='/hotels' component={Hotel}  />
      </Switch>
      

    
  );
}

export default App;
