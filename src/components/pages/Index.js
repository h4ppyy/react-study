import React, { useState, useEffect } from 'react'

import Contents from '../common/Contents'

const Index = (props) => {

  const [count, setCount] = useState(0);

  const handlePlusCount = () => {
    setCount(count + 1)
  }
  const handleMinusCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <Contents 
        count={count}
        onPlusCount={handlePlusCount}
        onMinusCount={handleMinusCount}
      />
    </>
  )
}

export default Index;