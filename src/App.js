import Header from './Header'
import React,{useState} from 'react'
import {DataProvider,Data_contex} from './Data_contex'
import Ads from './Ads'
import './App.css';

function App() {
let [search, setSearch]= useState(''); 
  return (
  <DataProvider>
    <div>
    <Header setSearch={setSearch}/>
    <Ads search={search}  setSearch={setSearch}/>
    </div>
    </DataProvider>

);
}

export default App;
