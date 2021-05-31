import Header from './Header'
import React,{useState} from 'react'
import Ads from './Ads'
import './App.css';

function App() {

let [search, setSearch]= useState(''); 

  return (
    
    <div>
    <Header setSearch={setSearch}/>
    <Ads search={search}  setSearch={setSearch}/>
    </div>

);
}

export default App;
