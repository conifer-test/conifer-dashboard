import { useState } from 'react';
import ReactPlayer from 'react-player';
import TestSuites from './TestSuites';

const TableRow = ({ testFile }) => {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [displayTests, setDisplayTests] = useState(false);

  const renderStatusColor = () => {
    if (testFile.status === 'pass') {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full';
    } else if (testFile.status === 'fail') {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full';
    } else {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100 rounded-full';
    }
  };

  const testSuites = testFile.results[0].suites;

  const videoButton = displayVideo ? (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='#374151'
    >
      <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z' />
    </svg>
  ) : (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='#374151'
    >
      <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z' />
    </svg>
  );

  return (
    <>
      <tr>
        <td
          onClick={() => setDisplayTests(!displayTests)}
          className='px-1 py-4 whitespace-no-wrap border-b border-gray-200 text-center'
        >
          <button className='text-sm leading-5 text-gray-800'>
            {displayTests ? '-' : '+'}
          </button>
        </td>
        <td className='pr-6 py-4 whitespace-no-wrap border-b border-gray-200'>
          <div className='text-sm leading-5 text-gray-800'>
            {testFile.testFileName}
          </div>
        </td>

        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center'>
          <span className={renderStatusColor()}>
            {testFile.status ? testFile.status : 'undefined'}
          </span>
        </td>

        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center'>
          <span className='text-sm leading-5 text-gray-800'>
            {(testFile.stats.duration / 1000).toFixed(2)}s
          </span>
        </td>

        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
          <span className='inline-flex px-2 text-xs font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full mx-px'>
            Total: {Math.floor(testFile.stats.tests)}
          </span>

          <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full mx-px'>
            Passes: {Math.floor(testFile.stats.passes)}
          </span>

          <span className='inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full mx-px'>
            Failures: {Math.floor(testFile.stats.failures)}
          </span>

          <span className='inline-flex px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100 rounded-full mx-px'>
            Skipped: {Math.floor(testFile.stats.skipped)}
          </span>
        </td>

        <td className='py-4 whitespace-no-wrap border-b border-gray-200 text-center'>
          <button
            className='align-middle'
            onClick={() => setDisplayVideo(!displayVideo)}
          >
            {videoButton}
          </button>
          {displayVideo && (
            <ReactPlayer
              autoPlay={true}
              className='react-player fixed-bottom'
              width='100%'
              height='100%'
              url={testFile.videoUrl}
              controls={true}
              muted={true}
            />
          )}
        </td>
      </tr>
      {displayTests &&
        testSuites.map((testSuite) => (
          <TestSuites key={testSuite.uuid} testSuite={testSuite} />
        ))}
    </>
  );
};

export default TableRow;
