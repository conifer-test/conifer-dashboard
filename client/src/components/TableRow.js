const TableRow = ({ testFile }) => {
  const renderStatusColor = () => {
    if (testFile.status === 'pass') {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full';
    } else if (testFile.status === 'fail') {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full';
    } else {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100 rounded-full';
    }
  };

  return (
    <tr>
      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <div className='text-sm leading-5 text-gray-800'>
          {testFile.testFileName}
        </div>
      </td>

      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <span className={renderStatusColor()}>
          {testFile.status ? testFile.status : 'undefined'}
        </span>
      </td>

      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
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
    </tr>
  );
};

export default TableRow;
