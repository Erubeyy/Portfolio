import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { getCurrentColor, setCurrentColor } from './helpers/Utils.jsx';
import './index.css';

const color = getCurrentColor();
setCurrentColor(color);

const render = async () => {
    await import(`./assets/sass/themes/${color}.scss`)
};

render().then(() => {
    const root = createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
});


