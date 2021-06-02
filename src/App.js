import Header from './Header'
import Cart from './Cart'
import React,{useState} from 'react'
import {DataProvider} from './Data_contex'
import Ads from './Ads'
import './App.css';

function App() {
let [search, setSearch]= useState(''); 
  return (
  <DataProvider>
    <div>
    <Header setSearch={setSearch}/>
    <Ads search={search}  setSearch={setSearch}/>
    <Cart/>
    </div>
    </DataProvider>

);
}

export default App;
