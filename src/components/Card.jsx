function Card(props) {

  const film = props.film

  const getStars = (vote_average) => {
    const stars = Math.round(vote_average / 2)
    let star = []
    for (let i = 0; i < 5; i++ ){
      if (i < stars) {
        star.push (<i className="fa-solid fa-star" key={(i)}></i>);  
      } else {
        star.push (<i className="fa-regular fa-star" key={(i)}></i>);
      }
    } 
    return star
  }

  return (
  <div className="col-sm-4 col-md-3 mb-3 mt-2">
    <div className="card">
       <img className="card-img-top" alt={film.poster_path} src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} onError={(e) => e.target.src = 'https://www.innerintegratori.it/wp-content/uploads/2021/06/placeholder-image.png' }/> 
        <div className="card-hover">
          <p><strong>Titolo:</strong>{film.title ||film.original_title || film.original_name }</p>
          <p><strong>Titolo Originale:</strong>{film.original_title || film.original_name}</p>

           {film.original_language === 'en' ? 
               ( <p>
                  <strong>Lingua:</strong>
                  <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" title="UK Flag" style={{ width: '40px', height: '30px' }} />
                </p>) : 

                film.original_language === 'it' ? 
                ( <p>
                  <strong>Lingua:</strong>
                  <img src="https://flagcdn.com/w320/it.png" alt="Italy Flag" title="Italy Flag" style={{ width: '40px', height: '30px' }} /> 
                </p>) 
                
                : (`lingua: ${film.original_language}`)
                
            }
       
            <p className="p-star"><strong>Voto:</strong> {getStars(film.vote_average)}</p>
    
             <p><strong>Overview:</strong>{film.overview}</p>
        </div>
    </div>{/* card */}
  </div> /* col */
  
  )
}

export default Card




