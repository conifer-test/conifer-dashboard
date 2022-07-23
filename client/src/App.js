import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard"
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/testRun" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
