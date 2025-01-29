function Card(props) {

  const film = props.film

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
  <div className="col-sm-4 col-md-3 mb-3 mt-2">
    <div className="card">
       <img className="card-img-top" alt="" src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} /> 
        <div className="card-hover">
          <h4>{film.original_title || film.title || film.original_name}</h4>

    
           {film.original_language === 'en' ? 
               ( <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" title="UK Flag" style={{ width: '40px', height: '30px' }} />) : 

                film.original_language === 'it' ? 
                (<img src="https://flagcdn.com/w320/it.png" alt="Italy Flag" title="Italy Flag" style={{ width: '40px', height: '30px' }} />) : (`lenguage: ${film.original_language}`)
            }
       
            <p className="p-star">{getStars(film.vote_average)}</p>
    
             <p>{film.overview}</p>
        </div>
    </div>{/* card */}
  </div> /* col */
  
  )
}

export default Card




