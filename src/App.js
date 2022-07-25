import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Theme} from 'react-daisyui';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/404';


function App() {
  
 return (
  <Router>
    <Theme dataTheme='dark'>
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
    </Theme>
  </Router>
);
}

export default App;
