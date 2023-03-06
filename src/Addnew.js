import './App.css';
import React, { Component } from 'react';

class Addnew extends Component {

    render() {
        return (

            <div class="">
                 <div class=" border-b">
                    <div class="max-w-lg mx-auto m-12 rounded-3xl shadow-lg shadow-gray-900 bg-gray-400">
                        <div class="text-center py-4 bg-gray-500 rounded-t-lg">
                            <h1 class="text-2xl font-bold">Add New Blog</h1>
                        </div>
                        <div class="p-4">
                            <form action="#" method="post">
                                <div class="mb-4">
                                    <label for="name" class="block mb-2 font-bold">Title:</label>
                                    <input type="text" id="name" name="name" class="w-full p-2 border bg-white rounded" />
                                </div>
                                <div class="mb-4">
                                    <label for="message" class="block mb-2 font-bold">Description:</label>
                                    <textarea id="message" name="message" rows="4" class="w-full p-2 border bg-white rounded"></textarea>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="px-4 py-2 bg-white text-black hover:text-white font-semibold rounded hover:bg-gray-900">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Addnew;