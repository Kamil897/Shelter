import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import PreLoader from "./Components/PreLoader/PreLoader.jsx";
import Footer from './Components/Footer/Footer.jsx';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading && <PreLoader />}
      {!isNotFoundPage && <Header />}
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {!isNotFoundPage && < Footer/>}
    </>
  );
}

export default App;
