import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration-form" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
