import './App.css';
import React, { Component } from 'react';
import NavBar from './Style/NavBar';
import Footer from './Style/Footer';


class Contact extends Component {

    render() {
        return (
            <div class="h-screen bg-yellow-600 border-b">
                <NavBar />
                <div class="bg-yellow-600 border-b">
                    <div class="max-w-lg mx-auto mb-4 rounded-lg shadow-lg shadow-yellow-900 bg-blue-700">
                        <div class="text-center py-4 bg-yellow-600 rounded-t-lg">
                            <h1 class="text-2xl font-bold">Contact Me</h1>
                        </div>
                        <div class="p-4">
                            <form action="#" method="post">
                                <div class="mb-4">
                                    <label for="name" class="block mb-2 font-bold">Name:</label>
                                    <input type="text" id="name" name="name" class="w-full p-2 border bg-yellow-600 rounded" />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block mb-2 font-bold">Email:</label>
                                    <input type="email" id="email" name="email" class="w-full p-2 border bg-yellow-600 rounded" />
                                </div>
                                <div class="mb-4">
                                    <label for="message" class="block mb-2 font-bold">Message:</label>
                                    <textarea id="message" name="message" rows="4" class="w-full p-2 border bg-yellow-600 rounded"></textarea>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="px-4 py-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-800 focus:outline-none focus:shadow-outline-blue active:bg-blue-600">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}
export default Contact;