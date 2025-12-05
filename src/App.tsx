import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Faq } from './components/About/Faq';
import { Scrap } from './components/HowTo/Scrap';
import { Workflow } from './components/HowTo/Workflow';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/scrap" element={<Scrap />} />
            <Route path="/workflow" element={<Workflow />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
