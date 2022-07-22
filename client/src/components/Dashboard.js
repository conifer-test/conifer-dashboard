import Table from "./Table";
import TestRunCard from "./TestRunCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [testFiles, setTestFiles] = useState([]);
  const [showTestFiles, setShowTestFiles] = useState(false);

  const toggleShowTestFiles = () => setShowTestFiles(!showTestFiles);

  useEffect(() => {
    const fetchTestFiles = async () => {
      const {data} = await axios.get('http://localhost:3001/testFiles');
      console.log(data);
      setTestFiles(data);
    }

    fetchTestFiles();
  }, []);

  return (
    <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
      <div className="container mx-auto mt-12">
          
        <div className="grid gap-4 lg:grid-cols-1">
          <TestRunCard testRunID={'6ff736cd-80da-4694-a1f2-7ec50dcd1933'} onTestRunClick={toggleShowTestFiles}/>
        </div>

        {showTestFiles && <Table testFiles={testFiles} />}

      </div>
    </div>
  );
}

export default Dashboard;