import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
