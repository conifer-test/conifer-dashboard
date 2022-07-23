import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard"
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import SingleTestRun from "./components/SingleTestRun";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/testRuns" element={<Dashboard />} />
        <Route path="/testRuns/:id" element={<SingleTestRun/>}/>
      </Routes>
    </div>
  );
}

export default App;
