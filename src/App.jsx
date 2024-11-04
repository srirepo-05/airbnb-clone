import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DropdownForm from './components/DropdownForm';
import './App.css';
import HouseGrid from './components/HouseGrid';

/*import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import Footer from './components/Footer';*/


function App() {
  const houses = [
    {
        title: "Cozy Cottage",
        price: 120,
        location: "Lake Tahoe, CA",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XtwzafLqc6pA-AmA1rhqA945oD2PQ_7uuw&s"
    },
    {
        title: "Modern Apartment",
        price: 150,
        location: "New York, NY",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bDSSn30wnxqhfJHI1IhAdQK_iPdu9d8jCg&s"
    },
    {
        title: "Beach House",
        price: 200,
        location: "Miami, FL",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoE1pjl_hvwRgbfkVfBPWJgwP53eK_heUlw&s"
    },
    {
        title: "Mountain Retreat",
        price: 180,
        location: "Aspen, CO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToklCWTSJj5g470x7y1L1l_QnUySXwTJq_lg&s"
    },
    /*{
        title: "Urban Loft",
        price: 250,
        location: "San Francisco, CA",
        image: "https://via.placeholder.com/300x200?text=Urban+Loft"
    },
    {
        title: "Charming Villa",
        price: 300,
        location: "Tuscany, Italy",
        image: "https://via.placeholder.com/300x200?text=Charming+Villa"
    },*/
];
  
  return (
    <div>
      <Header/>
      <div class="centered">
      <DropdownForm class="dropdown-form"/>
      
      </div>
      <HouseGrid houses={houses} />
      
      <Footer/>
    </div>
    
  );
}

export default App;