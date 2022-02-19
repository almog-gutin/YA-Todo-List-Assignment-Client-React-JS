import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TasksContextProvider from './context/Tasks.context';

import Header from './components/shared/header/Header.component';
import Footer from './components/shared/footer/Footer.component';
import Loader from './components/shared/loader/Loader.component';

const HomePage = lazy(() => import('./pages/home-page/HomePage.component'));
const PageNotFound = lazy(() => import('./pages/page-not-found/PageNotFound.component'));

const App = () => {
    return (
        <BrowserRouter>
            <TasksContextProvider>
                <Header />

                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>

                <Footer />
            </TasksContextProvider>
        </BrowserRouter>
    );
};

export default App;
