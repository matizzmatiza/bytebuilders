import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./layout/header";
import Home from "./pages/home";
import Offer from "./pages/offer";
import Realizations from "./pages/realizations";
import News from "./pages/news";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/offer' element={<Offer />} />
          <Route path='/realizations' element={<Realizations />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
