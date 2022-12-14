import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TechProvider } from '../contexts/TechContext';
import { UserProvider } from '../contexts/UserContext';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const MainRoutes = () => (
    <UserProvider>
        <TechProvider>
            <Routes>
                <Route path={"/"} element={<Login />}/>
                <Route path={"/register"} element={<Register />}/>
                <Route path={"/dashboard"} element={<Dashboard />}/>
                <Route path={"*"} element={<Navigate to="/" />}/>
            </Routes>
        </TechProvider>
    </UserProvider>
)