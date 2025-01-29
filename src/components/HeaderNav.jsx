import { useGlobalContext } from "../context/GlobalContext";
import generiFilm from "../data/generi"

function HeaderNav() {

  const {searchFilm,setSearchFilm, fetchData,fetchSelectedGenere, films} = useGlobalContext()

  const handlerSearch = (e) => {
    e.preventDefault()
    fetchData()
  }
  
  const handlerSearchGenere = (id) => {
    console.log(id)
    const filmMapGeneri= films.filter(film => console.log(film.genre_ids))
     console.log(filmMapGeneri) 
     console.log(films)
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