import Test from './Test';

const TestSuite = ({ suite }) => {
  const renderStatusColor = () => {
    if (suiteStatus === 'pass') {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full';
    } else if (suiteStatus === 'fail') {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full';
    }
  };

  const getSuiteStatus = ({ tests, skipped, passes }) => {
    if (
      tests.length === passes.length ||
      tests.length + skipped.length === passes.length
    ) {
      return 'pass';
    }
    return 'fail';
  };

  const suiteStatus = getSuiteStatus(suite);

  const tests = suite.tests;
  return (
    <>
      <tr>
        <td className='px-6 py-1 whitespace-no-wrap'></td>
        <td className='px-6 py-1 whitespace-no-wrap border-b border-gray-150'>
          <div className='text-sm leading-5 text-gray-800'>{suite.title}</div>
        </td>
        <td className='px-6 py-1 whitespace-no-wrap border-b border-gray-150'>
          <span className={renderStatusColor()}>{suiteStatus}</span>
        </td>
        <td
          className='px-6 py-1 whitespace-no-wrap border-b border-gray-150'
          colSpan={3}
        >
          <div className='text-sm leading-5 text-gray-800'>
            {(suite.duration / 1000).toFixed(2)}s
          </div>
        </td>
      </tr>
      {tests.map((test) => (
        <Test key={test.uuid} test={test} indent={true} />
      ))}
    </>
  );
};

export default TestSuite;
