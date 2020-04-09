import React, { useState } from 'react';

import './static/css/style.css'

import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'

const App = () => {

  const [count, setCount] = useState(0);

  const handlePlusCount = () => {
    setCount(count + 1)
  }
  const handleMinusCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <Header />

      {/* 내용을 컴포넌트화 하지 않은 경우 */}
      {count}
      <button onClick={handlePlusCount} type="button">Count up!</button>
      <button onClick={handleMinusCount} type="button">Count down!</button>

      {/* 내용을 컴포넌트화 한 경우 */}
      <Contents 
        count={count} 
        onPlusCount={handlePlusCount} 
        onMinusCount={handleMinusCount}
      />
      <Footer />
    </>
  )
}

export default App;
