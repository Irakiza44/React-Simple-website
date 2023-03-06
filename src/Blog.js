import './App.css';
import React, { Component } from 'react';
import NavBar from './Style/NavBar';
import Footer from './Style/Footer';
import { Link } from "react-router-dom";

class Contact extends Component {

  render() {
    return (
      <div class="h-screen bg-yellow-600 border-b-4 ">
        <NavBar />
        <div class="max-w-4xl flex mx-auto my-5 gap-9 ">
          <div class=" hover:scale-105 text-justify w-full md:w-3/4 shadow-lg shadow-yellow-900 bg-yellow-600 p-5 rounded-lg">
            <h1 class="font-bold text-2xl  mb-4 text-center">My Blog Post</h1>
            <p class="mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            <p class="mb-4">Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            <p class="mb-4">Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
          </div>
          <div class="hover:scale-105 w-full md:w-1/4 shadow-lg shadow-yellow-900 bg-yellow-600  p-5 rounded-lg ml-4">
            <h2 class="font-bold text-lg mb-4">Categories</h2>
            <ul class="list-reset">
              <li class="mb-2"><Link to="#" class="text-gray-700 hover:underline">Category 1</Link></li>
              <li class="mb-2"><Link to="#" class="text-gray-700 hover:underline">Category 2</Link></li>
              <li class="mb-2"><Link to="#" class="text-gray-700 hover:underline">Category 3</Link></li>
            </ul>
            <h2 class="font-bold text-lg mt-4 mb-4">Recent Posts</h2>
            <ul class="list-reset">
              <li class="mb-2"><Link to="#" class="text-gray-700 hover:underline">Post 1</Link></li>
              <li class="mb-2"><Link to="#" class="text-gray-700 hover:underline">Post 2</Link></li>
              <li class="mb-2"><Link to="#" class="text-gray-700 hover:underline">Post 3</Link></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
export default Contact;