import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/header';
import SearchBar from './components/ui/SearchBar';
import CharacterGrid from './components/characters/characterGrid';
import {useState,useEffect} from 'react';

const App = () => {

  const [items,setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [query,setQuery] = useState('');

  useEffect( () => {
    const fetchItems = async () => {
      //const proxyurl = "https://cors-anywhere.herokuapp.com/";
     
      const url =`https://api.covid19api.com/summary`
      //use the cors proxy to Add the Access-Control-Allow-Origin header to the API response.
      //if the API does not have that header

      const result = await axios(url);
      console.log(result.data.Countries);
      var temp = [];
      var data = result.data.Countries;
      data.forEach((item) => {
        var qlow = query.toLowerCase()
        var countryName = item.Country.toLowerCase()
        if(countryName.includes(qlow))
          temp.push(item);
      });
      setItems(temp);
      setIsLoading(false);

    };

    fetchItems();
  },[query])

  return (
    <div className='container'>
      <Header/>
      <SearchBar getQuery={(q) => {      
        setQuery(q);
       
        }}/>
      <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
