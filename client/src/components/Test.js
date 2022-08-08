const Test = ({ test, indent }) => {
  const renderStatusColor = () => {
    if (test.state === 'passed') {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full';
    } else if (test.state === 'failed') {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full';
    } else {
      return 'inline-flex px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100 rounded-full';
    }
  };

  const testStatus = () => {
    switch (test.state) {
      case 'passed':
        return 'pass';
      case 'failed':
        return 'fail';
      default:
        return 'skipped';
    }
  };

  const correctIndent = indent ? 'pl-10' : 'pl-6';

  return (
    <tr>
      <td className='px-6 whitespace-no-wrap border-gray-100'></td>

      <td
        className={
          correctIndent + ' whitespace-no-wrap border-b border-gray-100'
        }
      >
        <div className='text-xs leading-5 text-gray-800'>{test.title}</div>
      </td>

      <td className='px-6 whitespace-no-wrap border-b border-gray-100'>
        <span className={renderStatusColor()}>{testStatus()}</span>
      </td>

      <td
        className='px-6 whitespace-no-wrap border-b border-gray-100'
        colSpan='3'
      >
        <span className='text-sm leading-5 text-gray-800'>
          {(test.duration / 1000).toFixed(2)}s
        </span>
      </td>
    </tr>
  );
};

export default Test;
