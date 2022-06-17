import React from 'react'
import{Routes,Route} from 'react-router-dom';
import  {Footer}  from '../components/Footer';
import  {Login}  from '../components/Login';
import  World  from '../pages/World';
import  Astrology from '../pages/Astrology';
import  Cities  from '../pages/Cities';
import  Cricket  from '../pages/Cricket';
import  Editorials  from '../pages/Editorials';
import  Entertainment  from '../pages/Entertainment';
import  ForYou  from '../pages/ForYou';
import  India  from '../pages/India';
import  Latest  from '../pages/Latest';
import  Lifestyle  from '../pages/Lifestyle';
import  Shopnow  from '../pages/Shopnow';
import  Home  from '../pages/Home';
import Navbar from '../components/Navbar';

function AllRouter() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Astrology" element={<Astrology/>}/>
        <Route path="/cities" element={<Cities/>}/>
        <Route path="/cricket" element={<Cricket/>}/>
        <Route path="/editorials" element={<Editorials/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
        <Route path="/forYou" element={<ForYou/>}/>
        <Route path="/india" element={<India/>}/>
        <Route path="/latest" element={<Latest/>}/>
        <Route path="/lifestyle" element={<Lifestyle/>}/>
        <Route path="/Shopnow" element={<Shopnow/>}/>
        <Route path="/world" element={<World/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default AllRouter;

