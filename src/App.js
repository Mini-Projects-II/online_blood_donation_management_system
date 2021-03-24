import './App.css';
import './CSS/HomePage.css';
import './Pages/HomePage';
import LoginAsHospital from './Pages/LoginAsHospital';
import LoginAsPatient from './Pages/LoginAsPatient'
import LoginAsDonor from './Pages/LoginAsDonor'

function App() {
  return (
    <div className="App">
      <LoginAsDonor />
    </div>
  );
}

export default App;
