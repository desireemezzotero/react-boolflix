import { useGlobalContext } from "../context/GlobalContext"

function Card() {
  const {films} = useGlobalContext()

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
    <>
    {films.map(film => 
      <div className="col-sm-4 col-md-3 mb-5 mt-5" key={film.id}>
        <div className="card">
          <img className="card-img-top" alt="" src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} />
           <div className="card-hover">
               <h5>{film.original_title}</h5>
    
               <p>{film.title}</p>
    
               {film.original_language === 'en' ? 
               ( <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" title="UK Flag" style={{ width: '30px', height: '20px' }} />) : 
               film.original_language === 'it' ? 
               (<img src="https://flagcdn.com/w320/it.png" alt="Italy Flag" title="Italy Flag" style={{ width: '30px', height: '20px' }} />) : (film.original_language)}
    
               <p>{getStars(film.vote_average)}</p>
    
               <p>{film.media_type}</p>
           </div>
        </div>{/* card */}
      </div> /* col */
    )}
    </>
  )
}

export default Card