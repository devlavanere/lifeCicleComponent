import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import IPAdressFinder from "./components/IPAdressFinder";
import LanguageTranslator from "./components/LanguageTranslator";
import MovieSearchEngine from "./components/MovieSearchEngine";
import QRCodeGenerator from "./components/QRCodeGenerator";
import Login from './components/Login'; // Importe o componente Login

function App() {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path='/' element={<LanguageTranslator />} />
                    <Route path='/movie-search-engine' element={<MovieSearchEngine />} />
                    <Route path='/qrcode-generator' element={<QRCodeGenerator />} />
                    <Route path='/ip-address-finder' element={<IPAdressFinder />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
