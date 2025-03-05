import React from 'react'

function NavbarSection({change,theme}) {
  return (
   <section>
    <header className="body-font bg-BgColor">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <p className="ml-3 text-xl text-TextColor">Ice Cream</p>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 text-TextColor">First Link</a>
      <a className="mr-5 hover:text-gray-900 text-TextColor">Second Link</a>
      <a className="mr-5 hover:text-gray-900 text-TextColor">Third Link</a>
      <a className="mr-5 hover:text-gray-900 text-TextColor">Fourth Link</a>
    </nav>
    <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={change}
              checked={theme === 'dark'}
            />
            <div className="w-14 h-7 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-7 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium text-TextColor">
              {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </span>
          </label>
  </div>
</header>
   </section>
  )
}

export default NavbarSection