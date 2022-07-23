
import { Link } from "react-router-dom";

const TestRunTile = ({ testRunID }) => {
  return (
    <>
    <Link to={`/testRuns/${testRunID}`}>
      <div className="flex items-center px-4 py-4 bg-white rounded-md shadow-md">
        <div className="p-3 bg-green-600 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="mx-4">
          <h4 className="text-1xl font-semibold text-gray-700">Test Run</h4>
          <div className="text-gray-500">{testRunID}</div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default TestRunTile
