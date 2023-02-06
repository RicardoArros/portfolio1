import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./router/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import useWindowDimensions from "./hooks/useDimensions";

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <BrowserRouter>
        <div className="layout">
          <Header />

          <div className="main">
            <Router />
          </div>

          {width > 768 && <Footer />}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
