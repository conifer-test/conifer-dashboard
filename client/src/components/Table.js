import TableRow from './TableRow';

const Table = ({ testFiles }) => {
  return (
    <div className='flex flex-col mt-8'>
      <div className='py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
        <div className='inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg'>
          <table className='min-w-full'>
            <thead>
              <tr>
                <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50'></th>
                <th className='pr-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50'>
                  Spec Name
                </th>
                <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 text-center'>
                  Status
                </th>
                <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 text-center'>
                  Duration
                </th>
                <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50'>
                  Tests Stats
                </th>
                <th className='px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 text-center'>
                  Video
                </th>
              </tr>
            </thead>

            <tbody className='bg-white'>
              {testFiles.map((testFile, index) => (
                <TableRow key={index} testFile={testFile} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
