import React, { Component } from 'react';
import NavBar from './Style/NavBar';
import Main from './Style/Main';
import Footer from './Style/Footer';
class Home extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
}
}

export default Home;