import React, { useState } from 'react';
import YearList from './YearList';
import SelectedYear from './SelectedYear';
import MovieList from './MovieList';
import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {
const [selectedYear,changeSelectedYear]=useState(null);
const change=(e)=>{
  changeSelectedYear(e.target.value);
}
  return (
    <>
    <div id="main">
      <YearList 
      years={Object.keys(data)}
      selectedYear={selectedYear}
      changeSelectedYear={change}
      />
      
    </div>
    <SelectedYear
    selectedYear={selectedYear}
    />
    <MovieList 
    movies={data[selectedYear] || []}
    />
    </>
  )
}


export default App;
