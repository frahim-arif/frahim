import React from 'react'

export default function Header() {
  return (
    <div>
      

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../images/logo.png" class="h-14" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" class="text-sm  text-gray-500 dark:text-white hover:underline">+919058596626</a>
            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto ">
        <div id="dropdownHover" className="flex items-center justify-center mx-auto ">
            <ul class="flex flex-row justify-between font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm "aria-labelledby="dropdownHover">
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" aria-current="page">Home</a>
                    
                </li>
                
                
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">About</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Contect</a>
                </li>
               
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}

{/* <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                     <li className="py-1" role="menu">
                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account settings</a>
                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">License</a>
                </li>
                </ul> */}

{/* <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div> */}
