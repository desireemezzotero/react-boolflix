import {createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
  const [films, setFilms] = useState([]); 
  const [searchFilm, setSearchFilm] = useState('')

  console.log(searchFilm)
  const fetchData = () => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=91a4c60ba1089ba996b2c1f041145ce1&query=${encodeURIComponent(searchFilm)}`
    axios.get(apiUrl)
    .then(res => 
     setFilms(res.data.results)
    )
  }

  return (
    <GlobalContext.Provider value={{fetchData,films, searchFilm, setSearchFilm}}>
       {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export {GlobalProvider, useGlobalContext}