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
          <h2>{film.title}</h2>
          <p>{film.original_language}</p>
          <p>{film.vote_average}</p>
        </li>)}
    </ul>
  )
}

export default Main 