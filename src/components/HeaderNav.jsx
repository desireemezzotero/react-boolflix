import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext";
import generiFilm from "../data/generi"

function HeaderNav() {

  const {searchFilm,setSearchFilm, fetchData, filtredFilm, setFilteredFilms} = useGlobalContext()
  
  const handlerSearch = () => { 
    fetchData()
  }
  
  const handlerSearchGenere = (id) => {
    const filmMapGeneri= filtredFilm.filter(film => film.genre_ids?.includes(id)) 
    filmMapGeneri.length > 0 ? setFilteredFilms(filmMapGeneri) : (<h5>NON CI SONO RISULTATI PER QUESTA CATEGORIA</h5>)

    console.log(id,filmMapGeneri) 
  }

  return (
   <header>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid  justify-content-between d-flex">
         <h1>NETFLIX</h1>
          <div className="d-flex">

          <div className="btn-group me-2">
            <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
             Genere
            </button>
            <ul className="dropdown-menu">
              {
                generiFilm.map (film => 
                  <li key={film.id}><a className="dropdown-item" href="#" onClick={()=> {handlerSearchGenere(film.id)}}>{film.name}</a></li>
                )
              }
            </ul>
         </div>

            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Cerca" 
              aria-label="Search" 
              value={searchFilm}
              onChange={(e) => setSearchFilm(e.target.value)}/>
            <button 
              className="btn btn-outline-light" 
              type="submit"
              onClick={handlerSearch}>Cerca</button>

           
         </div>

      </div>
    </nav>
  </header>
  )
}

export default HeaderNav