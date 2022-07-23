/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const inactiveClassName = "inline-block w-full h-full px-3 py-2 font-bold text-white mb-2 rounded hover:shadow hover:bg-gray-800"
  const activeClassName = "inline-block w-full h-full px-3 py-2 font-bold text-white mb-2 bg-gray-800 rounded shadow"

  return (
    <div className="px-4 py-2 bg-gray-200 bg-green-900 lg:w-1/4">
      <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 text-white lg:hidden" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>

      <div className="hidden lg:block">
  
        <div className="my-2 mb-6">
          <h1 className="text-2xl font-bold text-white">conifer</h1>
        </div>
            
        <ul>
          <li>
            <NavLink className={({ isActive }) => isActive ? activeClassName : inactiveClassName } to="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
                Home
            </NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) => isActive ? activeClassName : inactiveClassName } to="/testRuns">
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Test Runs
            </NavLink>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Sidebar;