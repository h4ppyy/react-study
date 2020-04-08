import React from 'react';

import './static/css/style.css'

import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
        <>
            <Header/>
            <Contents/>
            <Footer/>
        </>
    )
  }
}

export default App;
