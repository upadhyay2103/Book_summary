import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookProvider from './store/Book-store';
import { useState } from 'react';

function App() {
  let [site, setSite] = useState("Home");

  const handleClick = () => {
    // console.log(site);
    if (site === "Home") {
        setSite("Add-Book");
    } 
    else {
        setSite("Home");
    }
}

  return (
    <BookProvider>
    <div className='content'>
      <Sidebar site={site} handleClick={handleClick}></Sidebar>
      <div className='s-cont'>
      <Header></Header>
      {site==="Home" ? <BookList/> : <AddBook/>}
      </div>
    </div>
    </BookProvider>
  )
}

export default App
