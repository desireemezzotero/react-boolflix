import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import CardWrapper from "./CardWrapper"
import Carousel from "./Carousel"

function Main() {
  const {fetchData,fetchSelectedGenere, fetchHome} = useGlobalContext()

  useEffect(() => {
    fetchData()
    fetchSelectedGenere()
    fetchHome()
  },[])

  return (
    <>
    <CardWrapper/> 
    <Carousel/>
  </>
  )
}

export default Main 