import './App.css';
import Home from './screens/Home';
import SignUp from './screens/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/SignUp' element={<SignUp />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
