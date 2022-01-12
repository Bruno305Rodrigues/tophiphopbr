import { Routes, Route } from 'react-router-dom';
import Lista from '../components/Lista/Lista';
import { Detalhes } from '../components/detalhes/Detalhes';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Lista />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>
    )
}