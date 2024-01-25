import React from 'react'
import FoodList from './components/FoodList'
import "./App.css";

export default function App() {
  const fooditem = [
   "Pizza", "Pasta", "Burger", "Fries", "Noodles","Manchurian"
  ];
  
  return (
    <>
       <FoodList item={fooditem}/>
    </>
  )
}
