import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <Router basename="/neuraletter">
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
