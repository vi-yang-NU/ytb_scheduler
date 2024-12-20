import Profile from './profile.js'

const DashboardSection = () => {
  return (
    <div className='pr-12 pt-6 pb-6'>
      {/* Header Section */}
      <div className='flex justify-between items-center mb-6'>
        {/* Page Title */}
        <h1 className='text-4xl font-bold text-gray-100'>
          Scheduler Dashboard
        </h1>
        {/* Profile Section */}
        <Profile userName='John Doe' />
      </div>

      {/* Main Dashboard Content */}
      <div className='bg-indigo-900 bg-opacity-70 p-6 rounded-lg shadow-md flex-grow'>
        <div className='grid grid-cols-3 grid-rows-3 gap-6'>
          {/* CTR Average Card */}
          <div className='col-span-1 bg-gray-900  text-white p-6 rounded-lg transform transition-transform hover:bg-gray-800 transition-colors'>
            <h3 className='text-lg mb-4'>Last week CTR average</h3>
            <div className='flex items-center space-x-2'>
              <p className='text-5xl font-bold'>13%</p>
              <span className='text-yellow-400 text-3xl'>▲</span>
            </div>
          </div>

          {/* 200% Improvement Card */}
          <div className='col-span-1 bg-gray-900 text-white p-6 rounded-lg transform transition-transform hover:bg-gray-800 transition-colors'>
            <h3 className='text-lg mb-4'>Recently Post Stats</h3>
            <div className='flex items-center space-x-2'>
              <p className='text-5xl font-bold'>200%</p>
              <span className='text-yellow-400 text-3xl'>▲</span>
            </div>
          </div>

          {/* Quick Video Monitoring */}
          <div className='col-span-1 row-span-3 bg-gray-900 text-white p-6 rounded-lg transform transition-transform hover:bg-gray-800 transition-colors'>
            <h3 className='text-lg'>Quick Video Monitoring</h3>
          </div>

          {/* Total Monitored Videos Improvement */}
          <div className='col-span-2 row-span-2 bg-gray-900 text-white p-6 rounded-lg transform transition-transform hover:bg-gray-800 transition-colors'>
            <h3 className='text-lg'>Total monitored videos improvement</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSection
