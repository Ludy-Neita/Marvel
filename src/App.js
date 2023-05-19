import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';

function App() {
  return (
    <div> (Creando un App de Marvel)
      <BrowserRouter>
        <Routes>
          <Route path="/" element={() => <Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;