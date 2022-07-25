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
  }, [id]);

  const sse = new EventSource('http://localhost:5001/sse');

  sse.addEventListener('message', async ({ data }) => {
    const newData = JSON.parse(data);
    // const { data } = await axios.get(`http://localhost:5001/api/testRuns/${id}`)
    setTestFiles((prevData) => {
      return prevData.concat(...newData);
    });
    // setTestFiles();

    // console.log(data);
    // If data is sending the entire test files for a run, use setTestFiles and update entire thing
    // else, we update only the data that has been updated using map or something like that
  });

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
