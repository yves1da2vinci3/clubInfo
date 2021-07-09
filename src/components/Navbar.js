import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
      <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-3xl font-extrabold"><Link  to='/'>DSC-CLUBINFO</Link></span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-3xl  justify-center">
      <Link to='/signup' class="mr-5 lg:text-3xl font-semibold sm:text-base hover:text-gray-900">Creer un compte</Link>
      <Link to='/login' class="mr-5  font-semibold lg:text-3xl sm:text-base hover:text-gray-900">Se connecter</Link>
    </nav>
  </div>
</header>
    //         <ul className="inline-flex justify-between w-full text-3xl shadow lg:flex-row bg-white-300 sm:flex-col lg:h-20 sm:h-80"> 
    //  <span className="flex justify-between t sm:flex-col lg:flex-row">
    //  <li className="mx-6 my-5 uppercase hover:text-blue-500" ><Link to='/' >dsc-esatic</Link></li>
    //    <li className="mx-6 my-5 capitalize font-semibold"><a href="#">Liste des challenges </a></li>
    //  </span>
    //    <span className="flex justify-between sm:flex-col lg:flex-row">
    //    <li className="flex flex-row mx-6 my-5 font-semibold">
    //      <svg class="lg:w-12 sm:w-6 sm:h-6 mx-2 lg:h-12 py-1 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
    //      <Link  to="/signup">creer un compte</Link></li>
    //    <li className="mx-8 my-5 font-semibold"><Link  to="/login">se connecter</Link></li>
    //    </span>
    //     </ul>
    )
}

export default Navbar
