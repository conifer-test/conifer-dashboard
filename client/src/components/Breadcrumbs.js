import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = ({ testRunID }) => {
  const location = useLocation();

  return (
    <div className='flex p-3 mb-2 bg-gray-200 rounded'>
      <ol className='flex items-center text-gray-800'>
        <li className='flex items-center'>
          <Link reloadDocument to='/testRuns' className='font-bold'>
            Test Runs
          </Link>
        </li>

        {location.pathname === '/testRuns' ? undefined : (
          <>
            <span className='ml-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </span>

            <li className='flex items-center ml-2'>
              <Link to={`/testRuns/${testRunID}`}>Test Run - {testRunID}</Link>
            </li>
          </>
        )}
      </ol>
    </div>
  );
};

export default BreadCrumbs;
