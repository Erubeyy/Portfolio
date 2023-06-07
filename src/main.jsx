import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { getCurrentColor, setCurrentColor } from './helpers/Utils.jsx';
import './index.css'


const color = getCurrentColor();
setCurrentColor(color);

const render = () => {
    import(`./assets/sass/themes/${color}.scss?inline`)
};
render();

const Main = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<Main />);
