import "../src/assets/logo.png";
import "../src/style/App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function Hues() {
  return (
    <>
      <div
        id='container'
        className='content_allign'>
        <header className='Top'>
          <img
            src='../src/assets/logo.png'
            alt='Logo Ski'
            className='Logo'
          />
        </header>
      </div>
      <div className='content_allign'>
        <div className='pos'>
          <section className='Navi'>
            <nav className='navigation'>
              <a
                className='light-up-button'
                href='../index.html'>
                Home
              </a>
              <a
                className='light-up-button'
                href='../schifoan/gallery.html'>
                Gallery
              </a>
            </nav>
          </section>
        </div>
      </div>
    </>
  );
}

export default Hues;
