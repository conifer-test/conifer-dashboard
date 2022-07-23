import TestRunCard from "./TestRunCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [testRuns, setTestRuns] = useState([]);

  useEffect(() => {
    const fetchTestRuns = async () => {
      const { data } = await axios.get('http://localhost:5001/api/testRuns');
      setTestRuns(data);
    }

    fetchTestRuns();
  }, []);

  return (
    <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
      <div className="container mx-auto mt-12">
        
        <div className="grid gap-4 lg:grid-cols-1">
          {testRuns.map(run => <TestRunCard key={run} testRunID={run} />)}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;