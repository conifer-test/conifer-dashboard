

const TableRow = ({ testFile }) => {
  const renderStatusColor = () => {
    if (testFile.status === "pass") {
      return "inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
    } else if (testFile.status === "fail") {
      return "inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full"
    } else {
      return "inline-flex px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100 rounded-full"
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
        <span className={renderStatusColor()}>
          {testFile.status}
        </span>
      </td>
    </tr>
  )
}

export default TableRow;

