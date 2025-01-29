import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import CardWrapper from "./CardWrapper"

function Main() {
  const {fetchData,fetchSelectedGenere} = useGlobalContext()

  useEffect(() => {
    fetchData()
    fetchSelectedGenere()
  },[])

  return (
    <>
    <CardWrapper/>
    <div className="container-main">
      <div className="container justify-content-center d-flex align-items-center">
        <h4>Cerca un film o una serie tv a tuo piacimento </h4>
      </div>
    </div>
  </>
  )
}

export default Main 