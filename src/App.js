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

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <AboutUs/>
    </div>
  );
}

export default App;
