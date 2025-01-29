import { useGlobalContext } from "../context/GlobalContext"
import Card from "./Card";

function CardWrapper() {
  const {films} = useGlobalContext()

  const movie = films.filter(film => film.media_type == 'movie');
  const tv = films.filter (film => film.media_type == 'tv')

  return (
    <>
    {movie.length > 0 && (
      <div className="container mt-5">
         <h4>Film</h4>
       <div className="row">
          {movie.map(film => 
           <Card
           film = {film}
           key= {film.id}/>
           )}
       </div> 
      </div>
    )}

   {tv.length > 0 && (
    <div className="container  mt-5">
       <h4>Serie TV</h4>
     <div className="row">
         {tv.map(film => 
           <Card
           film = {film}/>
          )} 
       </div>
    </div>
    )}
    </>
  )
}

export default CardWrapper