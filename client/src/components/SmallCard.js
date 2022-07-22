

const SmallCard = ({ total, description }) => {
  return (
    <div class="flex items-center px-4 py-6 bg-white rounded-md shadow-md">
      <div class="p-3 bg-green-600 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
      </div>
      <div class="mx-4">
          <h4 class="text-2xl font-semibold text-gray-700">{total}</h4>
          <div class="text-gray-500">{description}</div>
      </div>
  </div>
  )
}

export default SmallCard;