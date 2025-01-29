import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import CardWrapper from "./CardWrapper"

function Main() {
  const {fetchData} = useGlobalContext()

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
    <CardWrapper/>
  </>
  )
}

export default Main 