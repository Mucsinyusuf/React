import './Styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Header from './Header';
import About from './About';
import Profile from './Profile';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
