
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import AddProduct from '../pages/AddProduct/AddProduct';
import Error from '../pages/Error/Error';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<AddProduct />} />
        <Route path="/error" element={<Error />} />
    </Routes>
);

export default AppRoutes;