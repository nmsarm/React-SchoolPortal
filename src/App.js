import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration-form" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
