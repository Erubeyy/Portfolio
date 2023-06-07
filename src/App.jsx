import {useEffect} from "react";
import {Route, Routes, useLocation} from 'react-router-dom';
import {Portfolio} from './components/Portfolio.jsx'

const App = () => {
    const {pathName} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathName]);


  return (
    <div>
        <Routes>
            <Route path="/" element={<Portfolio/>} />
            {/*<Route path="/erubey" element={<h1>Erubey</h1>} />*/}
        </Routes>
    </div>
  )
}

export default App
