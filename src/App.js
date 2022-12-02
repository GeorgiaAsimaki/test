
import './App.css';
import Start from './components/Start';


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" >
                <Route index element={<Start />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;