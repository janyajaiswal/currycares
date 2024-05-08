import './App.css';
import Home from './screens/Home';
import SignUp from './screens/Signup';
import About from './screens/About';
import Orders from './screens/Orders';
import Profile from './screens/Profile';
import Cart from './screens/Cart'; // Import the Cart component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/SignUp' element={<SignUp />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Orders' element={<Orders />} />
          <Route exact path='/Profile' element={<Profile />} />
          <Route exact path='/Cart' element={<Cart />} /> {/* Add this line for Cart component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
