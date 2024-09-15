import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { OffersPage } from './pages/Offers';
import { ContactPage } from './pages/Contact';
import { ScrollToTop } from './components/UI/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

function App() {

	return (
		<Router>
      <HelmetProvider>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/offers' element={<OffersPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </HelmetProvider>
		</Router>
	);
}

export default App;
