import {BrowserRouter, Routes, Route} from "react-router-dom";


import Grafico1 from './pages/grafico1';

export default function Index() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Grafico1/>} />
            </Routes>
        </BrowserRouter>
    )
}