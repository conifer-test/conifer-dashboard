

const TableRow = ({ testFile }) => {
  const renderStatusColor = () => {
    if (testFile.status === 'pass') {
      return 'green'
    } else if (testFile.status === 'fail') {
      return 'red'
    } else {
      return 'gray'
    }
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">

              <div className="ml-4">
                  <div className="text-sm leading-5 text-gray-500">
                      {testFile.testRunID}
                  </div>
              </div>
          </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-800">
            {testFile.testFileName}
          </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <span
              className={`inline-flex px-2 text-xs font-semibold leading-5 text-${renderStatusColor()}-800 bg-${renderStatusColor()}-100 rounded-full`}>
            {testFile.status}
          </span>
      </td>
    </tr>
  )
}

export default TableRow;

