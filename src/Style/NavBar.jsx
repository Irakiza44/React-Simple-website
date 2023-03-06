import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Didier from './Didier.png';
class NavBar extends Component {


  render() {
    return (
      <div>
        <nav class="flex bg-blue-700 shadow-2xl text-white p-4 border-b">
          <div class=" flex justify-start space-x-2 "><img src={Didier} alt="didier" class="shadow-blue-900 shadow-lg rounded-full  ring-2 ring-blue-600 object-cover h-10 w-10" />

            <span class="text-white text-[25px] font-bold">
              <span class="first:text-white">L</span><span class="text-yellow-500">O</span>GO
            </span>

          </div>
          <div class="container flex flex-wrap  justify-end mx-auto">
            <ul class=" flex flex-col p-1 m-4  md:flex-row md:space-x-9 md:mt-2 md:text-sm md:font-medium  " >

              <Link to="/" ><li class=" justify-end text-[20px]">Home</li></Link>
              <Link to="/blog" ><li class="text-[20px] justify-end">Blog</li></Link>
              <Link to="/contact"><li class="text-[20px] justify-end">Contact Me</li></Link>
              <Link to="/service"><li class="text-[20px] justify-end">Services</li></Link>
              <Link to="/newdash"><li Class="bg-yellow-600  py-2 px-1 rounded-lg">Sign Up</li></Link>
            </ul>
          </div>

        </nav>
      </div>
    );
  }
}

export default NavBar;