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
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <LoginAsDonor/>
      <LoginAsHospital/>
      <LoginAsPatient/>
      <SignupAsDonor/>
      <SignupAsHospital/>
      <SignupAsPatient/>
      <AboutUs/>
      <ContactUs/>
    </div>
  );
}

export default App;
