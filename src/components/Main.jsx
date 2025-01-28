import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

function Main() {
  const {fetchData,films} = useGlobalContext()

  useEffect(() => {
    fetchData()
  },[])

  const getStars = (vote_average) => {
    const stars = Math.round(vote_average / 2)
    let star = []
    for (let i = 0; i < 5; i++ ){
      if (i < stars) {
        star.push (<i class="fa-solid fa-star" key={(i)}></i>);  
      } else {
        star.push (<i class="fa-regular fa-star" key={(i)}></i>);
      }
    } 
    return star
  }

  return (
  <ul className="list-group">
      {films.map(film => 
        <li className="list-group-item" key={film.id}>{film.original_title}
          <h5>{film.title}</h5>
          {film.original_language === 'en' ? 
          ( <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" title="UK Flag" style={{ width: '30px', height: '20px' }} />) : 

          film.original_language === 'it' ? 
          (<img src="https://flagcdn.com/w320/it.png" alt="Italy Flag" title="Italy Flag" style={{ width: '30px', height: '20px' }} />) : (film.original_language)}

          <p>{getStars(film.vote_average)}</p>
          <p>{film.media_type}</p>

          <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`} alt="" />
        </li>)}
    </ul>
  )
}

export default Main 