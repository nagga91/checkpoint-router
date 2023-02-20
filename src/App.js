import React, { Component } from 'react'
import Navbar1 from "./Components/Navbar"
import  CardList from "./Components/CardList"
import data from './Data'
import { Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <Routes>
        <Route path='/Cardlist' element={<CardList data={data}/>}/>

        </Routes>
        
      </div>
    )
  }
}




