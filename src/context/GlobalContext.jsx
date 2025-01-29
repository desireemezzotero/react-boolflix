import {createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext()


const GlobalProvider = ({children}) => {
  const [films, setFilms] = useState([]); 
  const [searchFilm, setSearchFilm] = useState('')
  const [selectedGenere, setSelectedGenere] = useState('null')
  
  console.log(searchFilm)

  const fetchData = () => {
    /* troviamo serie tv e film  */
    const baseUrl = `https://api.themoviedb.org/3/search/multi?api_key=91a4c60ba1089ba996b2c1f041145ce1&query=${encodeURIComponent(searchFilm)}`
    
    axios.get(baseUrl)
    .then(res => 
      setFilms(res.data.results)  
    )
  }
  
  const fetchSelectedGenere = (id) => {
    const genereURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=91a4c60ba1089ba996b2c1f041145ce1&with_genres=${id}`
   
    axios.get(genereURL)
    .then(res => {
      setSelectedGenere(res.data.genres)
    })
  }

  const value = {
    fetchData,
    films, 
    searchFilm, 
    setSearchFilm,
    fetchSelectedGenere,
    setSelectedGenere,
    selectedGenere
  }

  return (
    <GlobalContext.Provider value={value}>
       {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export {GlobalProvider, useGlobalContext}