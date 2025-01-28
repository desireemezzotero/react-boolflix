import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

function Main() {
  const {fetchData,films} = useGlobalContext()

  useEffect(() => {
    fetchData()
  },[])

  return (
  <ul className="list-group">
      {films.map(film => 
        <li className="list-group-item" key={film.id}>{film.original_title}
          <h5>{film.title}</h5>
          {film.original_language === 'en' ? 
          ( <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" title="UK Flag" style={{ width: '30px', height: '20px' }} />) : 

          film.original_language === 'it' ? 
          (<img src="https://flagcdn.com/w320/it.png" alt="Italy Flag" title="Italy Flag" style={{ width: '30px', height: '20px' }} />) : (film.original_language)}

          <p>{film.vote_average}</p>
          <p>{film.media_type}</p>
        </li>)}
    </ul>
  )
}

export default Main 