import './App.css';
import React, { Component } from 'react';
import NavBar from './Style/NavBar';
import Footer from './Style/Footer';


class Service extends Component {

    render() {
        return (
            <div class="h-screen bg-yellow-600 border-b-4 ">
                <NavBar />
                <section class="py-8">
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                            <div class="hover:scale-105 bg-yellow-600 rounded shadow p-4">
                                <h2 class="text-[23px] font-bold mb-2">Web Development</h2>
                                <p class="text-justify text-[18px] text-black mb-4">I can help you build custom websites and web applications using modern web technologies.</p>
                                <a href="#" class="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-blue-700">Learn more</a>
                            </div>
                            <div class="hover:scale-105 bg-yellow-600 rounded shadow p-4">
                                <h2 class="text-[23px] font-bold mb-2">Web Development</h2>
                                <p class="text-justify text-[18px] text-black mb-4">I can help you build custom websites and web applications using modern web technologies.</p>
                                <a href="#" class="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-blue-700">Learn more</a>
                            </div>
                            <div class="hover:scale-105 bg-yellow-600 rounded shadow p-4">
                                <h2 class="text-[23px] font-bold mb-2">Web Development</h2>
                                <p class="text-justify text-[18px] text-black mb-4">I can help you build custom websites and web applications using modern web technologies.</p>
                                <a href="#" class="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-blue-700">Learn more</a>
                            </div>
                            <div class="hover:scale-105 bg-yellow-600 rounded shadow p-4">
                                <h2 class="text-[23px] font-bold mb-2">Web Development</h2>
                                <p class="text-justify text-[18px] text-black mb-4">I can help you build custom websites and web applications using modern web technologies.</p>
                                <a href="#" class="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-blue-700">Learn more</a>
                            </div>
                            <div class="hover:scale-105 bg-yellow-600 rounded shadow p-4">
                                <h2 class="text-[23px] font-bold mb-2">Graphic Design</h2>
                                <p class="text-justify text-[18px] text-black mb-4">I can design stunning logos, graphics, and branding materials for your business.</p>
                                <a href="#" class="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-blue-700">Learn more</a>
                            </div>
                            <div class="hover:scale-105 bg-yellow-600 rounded shadow p-4">
                                <h2 class="text-[23px] font-bold mb-2">Digital Marketing</h2>
                                <p class="text-justify text-[18px] text-black mb-4">I can help you grow your business online with effective digital marketing strategies.</p>
                                <a href="#" class="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-blue-700">Learn more</a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

        )
    }
}
export default Service;