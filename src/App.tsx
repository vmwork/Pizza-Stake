import React, { FC } from 'react'
import Header from './components/header/header'
import './App.scss'

const App: FC = () => {
  return (
    <div className='App'>
      <div className='wrap'>
        <Header />
      </div>
    </div>
  )
}

export default App
