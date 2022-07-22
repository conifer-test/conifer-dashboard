

const Table = () => {
  return (
    <div class="flex flex-col mt-8">
        
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
                class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Test Run ID</th>
                            <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Test File Name</th>
                            <th
                                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                Status</th>
                        </tr>
                    </thead>

                    <tbody class="bg-white">

                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="flex items-center">

                                    <div class="ml-4">
                                        <div class="text-sm font-medium leading-5 text-gray-900">
                                            6ff736cd-80da-4694-a1f2-7ec50dcd1933
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-500">
                                    ./cypress/first-test.cy.js
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <span
                                    class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Pass</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="flex items-center">

                                    <div class="ml-4">
                                        <div class="text-sm font-medium leading-5 text-gray-900">
                                          6ff736cd-80da-4694-a1f2-7ec50dcd1933
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-500">
                                    ./cypress/third-test.cy.js
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <span
                                    class="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">Fail</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="flex items-center">

                                    <div class="ml-4">
                                        <div class="text-sm font-medium leading-5 text-gray-900">
                                          6ff736cd-80da-4694-a1f2-7ec50dcd1933
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-500">
                                    ./cypress/second-test.cy.js
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <span
                                    class="inline-flex px-2 text-xs font-semibold leading-5 text-gray-800 bg-gray-100 rounded-full">To be executed</span>
                            </td>
                        </tr>

                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
  );
}

export default Table;