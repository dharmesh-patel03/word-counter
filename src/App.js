import React from 'react'
import { WordCounter } from './page/WordCounter';
import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from './page/PageNotFound';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<WordCounter />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App