import './App.css';
import './CSS/HomePage.css';
import HomePage from './Pages/HomePage';
import LoginAsHospital from './Pages/LoginAsHospital';
import LoginAsPatient from './Pages/LoginAsPatient'
import LoginAsDonor from './Pages/LoginAsDonor'
import SignupAsDonor from './Pages/SignupAsDonor';
import SignupAsHospital from './Pages/SignupAsHospital';
import SignupAsPatient from './Pages/SignupAsPatient';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Error404 from './Components/Error404'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route exact path='/login/donor' component = {LoginAsDonor}/>
        <Route exact path='/login/patient' component = {LoginAsPatient}/>
        <Route exact path='/login/hospital' component = {LoginAsHospital}/>
        <Route exact path='/signup/donor' component = {SignupAsDonor}/>
        <Route exact path='/signup/patient' component = {SignupAsPatient}/>
        <Route exact path='/signup/hospital' component = {SignupAsHospital}/>
        <Route exact path='/aboutus' component = {AboutUs}/>
        <Route exact path='/contactus' component = {ContactUs}/>
        <Route component = {Error404}/>
      </Switch>
    </div>
  );
}

export default App;
