import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App';
import EnquiryForm from './EnquiryForm/EnquiryForm';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="enquiryForm" element={<EnquiryForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;



