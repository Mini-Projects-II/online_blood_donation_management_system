import './App.css';
import './CSS/HomePage.css';
import HomePage from './Pages/HomePage';
import LoginAsHospital from './Pages/LoginAsHospital';
import LoginAsPatient from './Pages/LoginAsPatient'
import LoginAsDonor from './Pages/LoginAsDonor'
import SignupAsDonor from './Pages/SignupAsDonor';
import SignupAsHospital from './Pages/SignupAsHospital';
import SignupAsPatient from './Pages/SignupAsPatient';

function App() {
  return (
    <div className="App">
      <SignupAsPatient/>
    </div>
  );
}

export default App;
