

const TestRunCard = ({ testRunID }) => {
  return (
    <div class="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
      <div class="p-3 bg-green-600 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
      </div>
      <div class="mx-4">
          <h4 class="text-1xl font-semibold text-gray-700">Test Run ID</h4>
          <div class="text-gray-500">{testRunID}</div>
      </div>
  </div>
  )
}

export default TestRunCard;