import React, { FC, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const MainPage = lazy(() => import("./pages/MainPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
