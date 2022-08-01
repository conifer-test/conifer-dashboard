import Table from './Table';
import TestRunTile from './TestRunTile';
import { useParams } from 'react-router-dom';
import BreadCrumbs from './Breadcrumbs';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SingleTestRun = () => {
  const { id } = useParams();
  const [testFiles, setTestFiles] = useState([]);

  useEffect(() => {
    const fetchTestFiles = async () => {
      const { data } = await axios.get(
        `http://localhost:5001/api/testRuns/${id}`
      );

      setTestFiles(data);
    };

    fetchTestFiles();

    const sse = new EventSource('http://localhost:5001/api/sse');

    sse.addEventListener('newItem', async ({ data }) => {
      const newData = JSON.parse(data);
      setTestFiles((prevData) => {
        return prevData.concat(...newData);
      });
    });
  }, [id]);

  return (
    <div className='w-full px-4 py-2 bg-gray-200 lg:w-full'>
      <div className='container mx-auto mt-12'>
        <BreadCrumbs testRunID={id} />
        <TestRunTile testRunID={id} />
        <Table testFiles={testFiles} testRunID={id} />
      </div>
    </div>
  );
};

export default SingleTestRun;
