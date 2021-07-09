import './App.css';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import UserScreen from './Screens/UserScreen';
import ProjectScreen from './Screens/ProjectScreen';
import UpdateProfileScreen from './Screens/UpdateProfileScreen';
import GroupScreen from './Screens/GroupScreen';
function App() {
  return (
   <Router>
     <Route exact path='/' component={HomeScreen} />
     <Route  path='/login' component={LoginScreen} />
     <Route  path='/signup' component={SignupScreen} />
     <Route  path='/user' component={UserScreen} />
     <Route  path='/update' component={UpdateProfileScreen }/>
     <Route  path='/project' component={ProjectScreen }/>
       <Route  path='/group' component={ GroupScreen}/>
   </Router>
  );
}

export default App;
