import './App.css';
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Blog from "./Blog"
import Contact from "./Contact"
import Service from './Service';
import Newdash from './Newdash';
import Addnew from './Addnew';
class App extends Component {

    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/Newdash" element={<Newdash />} />
                    <Route path="/Addnew" element={<Addnew />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </div>
        )
    }
}
export default App;