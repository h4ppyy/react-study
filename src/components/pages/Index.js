import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import allActions from '../actions'

import Contents from '../common/Contents'

const Index = (props) => {

  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

  const handlePlusCount = () => {
    dispatch(allActions.counterActions.increment())
  }
  const handleMinusCount = () => {
    dispatch(allActions.counterActions.decrement())
  }

  return (
    <>
      <Contents 
        counter={counter}
        onPlusCount={handlePlusCount}
        onMinusCount={handleMinusCount}
      />
    </>
  )
}

export default Index;