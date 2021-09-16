import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './component/Home/Home';
import MyButton from './component/UI/MyButton/MyButton';
import Navbar from './component/UI/Navbar/Navbar';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
            <Home/>
        </>
    );
}

export default App;
