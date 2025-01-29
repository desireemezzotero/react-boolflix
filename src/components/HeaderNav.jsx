import { useGlobalContext } from "../context/GlobalContext";

function HeaderNav() {

  const {searchFilm,setSearchFilm, fetchData} = useGlobalContext()
  const handlerSearch = (e) => {
    e.preventDefault()
    fetchData()
  }

  return (
   <header>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
         <h1>NETFLIX</h1>

         <form className="d-flex" role="search"> 
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Cerca" 
              aria-label="Search" 
              value={searchFilm}
              onChange={(e) => setSearchFilm(e.target.value)}/>
            <button 
              className="btn btn-outline-success" 
              type="submit"
              onClick={handlerSearch}>Cerca</button>
          </form> 
        </div>
    </nav>
  </header>
  )
}

export default HeaderNav