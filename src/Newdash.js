import './App.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Didier from './Didier.png';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';



class Newdash extends Component {

    render() {
        return (
            <div class="bg-white flex flex-col min-h-screen">

                <nav class="text-center text-[20px] bg-gray-500 text-white shadow-lg h-screen w-56 px-4 py-8 fixed left-0 top-0 nav">
                    <div class=" flex justify-center ">
                        <img src={Didier} alt="didier" class=" mb-2 shadow-lg rounded-full  ring-2 ring-gray-600 h-10 w-10 content-center" />
                    </div>
                    <ul>
                        <li class="mb-4">
                            <Link to="#" class="active:font-bold text-black hover:text-blue-500 font-medium block">
                                Dashboard
                            </Link>
                        </li>
                        <li class="mb-4">
                            <Link to="/Addnew" class="text-white hover:text-blue-500 font-medium block">
                                Add New Blog
                            </Link>
                        </li>
                    </ul>
                </nav>

                <main class="ml-56 p-8 bg ">

                <div class="flex justify-end">
            <Dropdown title="Day-Profile">
                <Dropdown.Item>
                    My Profile
                </Dropdown.Item>
                <Dropdown.Item >
                    Log Out
                </Dropdown.Item>
            </Dropdown>
        </div>
                    
                    
                    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
                    <p class="mb-4">Welcome to Dashboard!</p>

                    <div class="grid  grid-cols-3 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 hover:shadow-2xl hover:shadow-black">
                            <h2 class="text-lg font-bold mb-2 text-center">1</h2>

                        </div>
                        <div class="bg-white rounded-lg shadow p-4 hover:shadow-2xl hover:shadow-black">
                            <h2 class="text-lg font-bold mb-2 text-center">2</h2>

                        </div>
                        <div class="bg-white rounded-lg shadow p-4 hover:shadow-2xl hover:shadow-black">
                            <h2 class="text-lg font-bold mb-2 text-center">3</h2>

                        </div>
                    </div>

                    <div class="overflow-x-auto mt-14">
                        <table class="table-auto w-full">
                            <thead>
                                <tr class="bg-sky-400 ">
                                    <th class="px-4 py-2">Header 1</th>
                                    <th class="px-4 py-2">Header 2</th>
                                    <th class="px-4 py-2">Header 3</th>
                                    <th class="px-4 py-2">Header 4</th>
                                    <th class="px-4 py-2">Header 5</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-gray-100 hover:bg-gray-400 text-center">
                                    <td class="border px-4 py-2">Data 1</td>
                                    <td class="border px-4 py-2">Data 2</td>
                                    <td class="border px-4 py-2">Data 3</td>
                                    <td class="border px-4 py-2">Data 4</td>
                                    <td class="border px-4 py-2">Data 5</td>
                                </tr>
                                <tr class="bg-gray-100 hover:bg-gray-400 text-center">
                                    <td class="border px-4 py-2">Data 6</td>
                                    <td class="border px-4 py-2">Data 7</td>
                                    <td class="border px-4 py-2">Data 8</td>
                                    <td class="border px-4 py-2">Data 9</td>
                                    <td class="border px-4 py-2">Data 10</td>
                                </tr>
                                <tr class="bg-gray-100 hover:bg-gray-400 text-center">
                                    <td class="border px-4 py-2">Data 11</td>
                                    <td class="border px-4 py-2">Data 12</td>
                                    <td class="border px-4 py-2">Data 13</td>
                                    <td class="border px-4 py-2">Data 14</td>
                                    <td class="border px-4 py-2">Data 15</td>
                                </tr>
                                <tr class="bg-gray-100 hover:bg-gray-400 text-center">
                                    <td class="border px-4 py-2">Data 16</td>
                                    <td class="border px-4 py-2">Data 17</td>
                                    <td class="border px-4 py-2">Data 18</td>
                                    <td class="border px-4 py-2">Data 19</td>
                                    <td class="border px-4 py-2">Data 20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
                <div class="bg-gray-700 shadow mt-auto">
                    <h2 class=" font-bold p-3 text-white text-center">Copyright © 2023 Didier</h2>
                </div>
            </div>

        )
    }
}
export default Newdash;