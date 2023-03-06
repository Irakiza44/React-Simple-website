import React, { Component } from 'react';
import Didier from './Didier.png';

class Main extends Component {


  render() {
    return (
      <div class="bg-yellow-600 text-justify">
        <main class="container  py-4 px-2 bg-yellow-600 mx-auto">
          <div class="grid grid-cols-1 md:grid-rows-2 gap-0 bg-yellow-600">
            <div class=" p-0 mb-0 ">
              <h1 class="text-black mb-4 text-center text-lg text-[35px] font-bold" >Who I'm</h1>
              <div class="display: flex flex-wrap space-x-reverse gap-6">
                <div class="flex-auto basis-4/6 flex-row">
                  <p class="text-black text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt metus a pretium congue. Suspendisse blandit libero a ipsum euismod hendrerit. Donec sapien nisl, rhoncus ac tortor id, congue facilisis ligula. Phasellus ut lorem sit amet dolor gravida finibus vel ac ligula. Cras vel tortor nec turpis convallis venenatis at eu ligula. Donec nec dapibus ligula. Donec lobortis faucibus convallis. Nulla nibh magna, tristique ut ipsum quis, porttitor commodo nisl. Sed in felis quam. Nam ex lacus, tristique ut turpis non, vehicula gravida diam. Sed vitae tellus ac justo dictum porttitor in posuere lorem. Duis posuere luctus massa, a consectetur lacus hendrerit vel. Morbi tempus facilisis commodo. Curabitur volutpat in magna vel aliquet. Sed sed eleifend dui.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt metus a pretium congue. Suspendisse blandit libero a ipsum euismod hendrerit. Donec sapien nisl, rhoncus ac tortor id, congue facilisis ligula. Phasellus ut lorem sit amet dolor gravida finibus vel ac ligula. Cras vel tortor nec turpis convallis venenatis at eu ligula. Donec nec dapibus ligula. Donec lobortis faucibus convallis. Nulla nibh magna, tristique ut ipsum quis, porttitor commodo nisl. Sed in felis quam. Nam ex lacus, tristique ut turpis non, vehicula gravida diam. Sed vitae tellus ac justo dictum porttitor in posuere lorem. Duis posuere luctus massa, a consectetur lacus hendrerit vel. Morbi tempus facilisis commodo. Curabitur volutpat in magna vel aliquet. Sed sed eleifend dui.</p>
                </div>
                <div class="basis-1/5 flex items-center justify-center ">
                  <img src={Didier} alt="didier" class="shadow-yellow-900 shadow-lg rounded-full  ring-2 ring-yellow-600 " />
                </div>
              </div>
            </div>
            <div class=" pb-8 ">
              <h2 class="text-lg text-[23px] font-bold text-black mb-2 mt-0 text-center ">My Work</h2>
              <p class=" text-black  mb-8 mr-2 text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt metus a pretium congue. Suspendisse blandit libero a ipsum euismod hendrerit. Donec sapien nisl, rhoncus ac tortor id, congue facilisis ligula. Phasellus ut lorem sit amet dolor gravida finibus vel ac ligula. Cras vel tortor nec turpis convallis venenatis at eu ligula. Donec nec dapibus ligula. Donec lobortis faucibus convallis. Nulla nibh magna, tristique ut ipsum quis, porttitor commodo nisl. Sed in felis quam. Nam ex lacus, tristique ut turpis non, vehicula gravida diam. Sed vitae tellus ac justo dictum porttitor in posuere lorem. Duis posuere luctus massa, a consectetur lacus hendrerit vel. Morbi tempus facilisis commodo. Curabitur volutpat in magna vel aliquet. Sed sed eleifend dui.</p>
              

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-yellow-600 ">
                <div class=" shadow-yellow-900 shadow-lg p-2 bg-yellow-600  hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-900 hover:scale-103 hover:rounded-2xl">
                  <h2 class="text-black mb-4 text-center text-lg text-[23px] hover:text-white font-bold" >Web Development</h2>
                  <p class="text-black text-[18px] hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo sed nibh tincidunt finibus. Donec vel ex a massa commodo bibendum. Integer ac tristique sapien.</p>
                </div>
                <div class="shadow-lg p-2 shadow-yellow-900 bg-yellow-600 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-900 hover:scale-103 hover:rounded-2xl">
                  <h2 class="text-lg text-black mb-4 text-center text-[23px] hover:text-white font-bold">Graphic Design</h2>
                  <p class="text-black text-[18px] hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo sed nibh tincidunt finibus. Donec vel ex a massa commodo bibendum. Integer ac tristique sapien.</p>
                </div>
                <div class="shadow-lg p-2 shadow-yellow-900 bg-yellow-600 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-900 hover:scale-103 hover:rounded-2xl">
                  <h2 class="text-lg text-black mb-4 text-center text-[23px] hover:text-white font-bold" >React Js</h2>
                  <p class="text-black text-[18px] hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo sed nibh tincidunt finibus. Donec vel ex a massa commodo bibendum. Integer ac tristique sapien.</p>
                </div>
              </div>


            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;