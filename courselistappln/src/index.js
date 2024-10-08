import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import Routing from './Components/Routing';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Routing />);
