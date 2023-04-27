import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Auth } from './pages/auth';
import { CreateNew } from './pages/create-new';
import { SavedNew } from './pages/saved-new';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/auth" element = {<Auth />} />
          <Route path="/create-new" element = {<CreateNew />} />
          <Route path="/saved-new" element = {<SavedNew />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
