import React from 'react';
import Header from './Components/Header/Header.tsx'
import Main from './Components/Main/Main.tsx'
import Footer from './Components/Footer/Footer.tsx';

function App() {
  return (
    <div className="container">
      <div className="container__box">
        <div className="container__content">
          <Header/>
          <Main/>
          <Footer/>
        </div>
        <div className="container__light container__red"></div>
        <div className="container__light container__purple"></div>
        <div className="container__light container__yellow"></div>
        <div className="container__ball red__big"></div>
        <div className="container__ball red__small"></div>
        <div className="container__ball purple__big"></div>
        <div className="container__glass"></div>
        <div className="container__nois"></div>
      </div>
    </div>
  )
}

export default App;
